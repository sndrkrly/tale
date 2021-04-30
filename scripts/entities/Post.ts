/*
    Created by Sándor Király on 30/04/21.

    Copyright (c) OMEGA Magyarország Kft.
    All rights reserved.
*/

import { 
    Entity as TOEntity, 
    Column, 
    Index, 
    BeforeInsert,
    ManyToOne,
    JoinColumn
} from 'typeorm';

import { makeID, slugify } from '../utils/helpers';

import Entity from './Entity'; 

import User from './User';
import Sub from './Sub';

@TOEntity('posts')
export default class Post extends Entity {
    constructor(post: Partial<Post>) {
        super();
        Object.assign(this, post);
    };

    @Index()
    @Column()
    identifier: string /* 7 Character ID */

    @Column()
    title: string 

    @Index()
    @Column()
    slug: string

    @Column({ nullable: true, type: 'text' })
    body: string

    @Column()
    subName: string

    @ManyToOne(() => User, (user) => user.posts)
    @JoinColumn({ name: 'email', referencedColumnName: 'email' })
    user: User

    @ManyToOne(() => Sub, (sub) => sub.posts)
    @JoinColumn({ name: 'subName', referencedColumnName: 'name' })
    sub: Sub

    @BeforeInsert()
    makeIDandSlug() {
        this.identifier = makeID(7);
        this.slug = slugify(this.title);
    };
};