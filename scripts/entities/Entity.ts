/*
    Created by Sándor Király on 30/04/21.

    Copyright (c) OMEGA Magyarország Kft.
    All rights reserved.
*/

import { 
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn, 
    UpdateDateColumn, 
} from 'typeorm';

import { classToPlain, Exclude } from 'class-transformer';

export default abstract class Entity extends BaseEntity {
    @Exclude()
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    toJSON() {
        return classToPlain(this);
    };
};