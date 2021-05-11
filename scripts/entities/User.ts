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
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

import { IsEmail, Length } from 'class-validator';
import { Exclude } from 'class-transformer';
import { makeID } from '../utils/helpers';

import Entity from './Entity'; 
import bcrypt from 'bcrypt';
import Post from './Post';

@TOEntity('users')
export default class User extends Entity {
    constructor(user: Partial<User>) {
        super();
        Object.assign(this, user);
    };

    @PrimaryGeneratedColumn()
    id: number

    @Index()
    @Length(3, 255)
    @Column({ unique: true })
    firstName: string

    @Index()
    @Length(3, 255)
    @Column({ unique: true })
    lastName: string

    @Index()
    @IsEmail(undefined, { message: 'Valós e-mail címnek kell lennie!' })
    @Length(1, 255, { message: 'Az e-mail cím üres!' })
    @Column({ unique: true })
    email: string;

    @Column()
    @Exclude()
    @Length(6, 255, { message: 'Minimum 6 karakter hosszúnak kell lennie!' })
    password: string;

    @Index()
    @Column({ unique: true })
    usertoken: string

    @Index()
    @Column({ nullable: false, default: false })
    verified: boolean

    @Index()
    @Column({ nullable: false, default: false })
    online: boolean

    @Index()
    @Column({ unique: true })
    username: string

    @OneToMany(() => Post, post => post.user)
    posts: Post[];

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 6);
    };
    
    @BeforeInsert()
    setToken() {
        this.usertoken = makeID(12);
    }

    @BeforeInsert()
    setUsername() {
        this.username = this.firstName + ' ' + this.lastName + '@' + this.usertoken;
    };
};