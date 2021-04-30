/*
    Created by Sándor Király on 29/04/21.

    Copyright (c) OMEGA Magyarország Kft.
    All rights reserved.
*/

import { NextFunction, Request, Response } from 'express';
import User from '../entities/User';

import jwt from 'jsonwebtoken';

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            throw new Error('Sikertelen lekérés.');
        };

        const { email }: any = jwt.verify(token, process.env.JWT_SECRET!);
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('Sikertelen lekérés.');
        };

        res.locals.user = user;
        return next();
    } catch(err) {
        console.log(err);
        return res.status(401).json({ error: 'Sikertelen lekérés' });
    };
};