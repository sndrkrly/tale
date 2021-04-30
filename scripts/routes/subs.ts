/*
    Created by Sándor Király on 30/04/21.

    Copyright (c) OMEGA Magyarország Kft.
    All rights reserved.
*/

import { getRepository } from 'typeorm';

import { Request, Response, Router } from 'express';
import { isEmpty } from 'class-validator';

import User from '../entities/User';
import Sub from '../entities/Sub';

import auth from '../middleware/auth';

const createSub = async (req: Request, res: Response) => {
    const { name, title, description } = req.body;
    const user: User = res.locals.user;

    try {
        let errors: any = {};
        
        if (isEmpty(name)) errors.name = 'A név nem lehet üres!';
        if (isEmpty(title)) errors.title = 'A cím nem lehet üres!';

            const sub = await getRepository(Sub)
                .createQueryBuilder('sub')
                .where('lower(sub.name) = :name', { name: name.toLowerCase() })
                .getOne()

        if (sub) errors.name = 'A típus már létezik!';

        if (Object.keys(errors).length > 0) {
            throw errors;
        };
    } catch (err) {
        return res.status(400).json(err);
    };

    try {
        const sub = new Sub({ name, description, title, user });
        await sub.save();

        return res.json(sub);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Valami félre ment:/' });
    };
};

const router = Router();
router.post('/', auth, createSub);

export default router;