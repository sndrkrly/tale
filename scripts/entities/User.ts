/*
    Created by Sándor Király on 29/04/21.

    Copyright (c) OMEGA Magyarország Kft.
    All rights reserved.
*/

import { 
    Entity as TOEntity, 
    Column, 
    Index, 
    BeforeInsert,
    OneToMany
} from 'typeorm';

import { IsEmail, Length } from 'class-validator';
import { Exclude } from 'class-transformer';

import Entity from './Entity'; 
import bcrypt from 'bcrypt';
import Post from './Post';

@TOEntity('users')
export default class User extends Entity {
    constructor(user: Partial<User>) {
        super();
        Object.assign(this, user);
    };

    @Index()
    @IsEmail()
    @Column({ unique: true })
    email: string;

    @Index()
    @Length(3, 255)
    @Column({ unique: true })
    username: string

    @Column()
    @Exclude()
    @Length(6, 255)
    password: string;

    @OneToMany(() => Post, post => post.user)
    posts: Post[];

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 6);
    };
};