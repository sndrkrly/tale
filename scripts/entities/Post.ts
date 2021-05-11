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
    JoinColumn,
} from 'typeorm';

import { makeID, slugify } from '../utils/helpers';
import { Expose } from 'class-transformer';

import Entity from './Entity'; 
import User from './User';
import Sub from './Sub';

@TOEntity('posts')
export default class Post extends Entity {
    /*
    @Column({ nullable: true, type: 'text' })
    body: string
    */

    constructor(post: Partial<Post>) {
        super();
        Object.assign(this, post);
    };

    @Index()
    @Column()
    identifier: string

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    price: string

    @Column()
    place: string

    @Index()
    @Column()
    slug: string

    @Column()
    status: string

    @Column()
    isPinned: string

    @Column()
    subName: string

    @Column()
    username: string

    @ManyToOne(() => User, (user) => user.posts)
    @JoinColumn({ name: 'username', referencedColumnName: 'username' })
    user: User

    @ManyToOne(() => Sub, (sub) => sub.posts)
    @JoinColumn({ name: 'subName', referencedColumnName: 'name' })
    sub: Sub

    @Expose() get url(): string {
        return `/${this.subName}/${this.identifier}`;
    };

    @BeforeInsert()
    makeIDandSlug() {
        this.identifier = makeID(7);
        this.slug = slugify(this.name);
    };
};