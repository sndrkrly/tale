/*
    Created by Sándor Király on 29/04/21.

    Copyright (c) OMEGA Magyarország Kft.
    All rights reserved.
*/

import { Request, Response, Router } from 'express';
import { isEmpty, validate } from 'class-validator';

import User from '../entities/User';
import auth from '../middleware/auth';

import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import bcrypt from 'bcrypt';

const mapErrors = (errors: Object[]) => {
    return errors.reduce((prev: any, err: any) => {
        prev[err.property] = Object.entries(err.constraints)[0][1];
        return prev
    }, {});
};

const register = async (req: Request, res: Response) => {
    const { email, firstName, lastName, password } = req.body;

    try {
        let errors: any = {};

        const emailUser = await User.findOne({ email });
        if (emailUser) { 
            errors.email = 'Az e-mail cím már használatban van!';
        };

        if (Object.keys(errors).length > 0) {
            return res.status(400).json(errors);
        }
        
        const user = new User({ email, firstName, lastName, password });
        
        errors = await validate(user);
        if (errors.length > 0) {
           return res.status(400).json(mapErrors(errors));
        };

        await user.save();
        return res.json(user);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        let errors: any = {};

        if (isEmpty(email)) errors.email = 'Az e-mail cím nem lehet üres!';
        if (isEmpty(password)) errors.password = 'A jelszó nem lehet üres!'

        if (Object.keys(errors).length > 0) {
            return res.status(400).json(errors);
        };

        const user = await User.findOne({ email });
        if (!user) { 
            return res.status(404).json({ error: 'Felhasználó nem található!' });
        }

        const passwordMatches = await bcrypt.compare(password, user.password);
        if (!passwordMatches) {
            return res.status(401).json({ password: 'A jelszó helytelen!' });
        };

        const token = jwt.sign({ email }, process.env.JWT_SECRET!);
        res.set('Set-Cookie', cookie.serialize('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 3600,
            path: '/'
        }));

        return res.json(user);
    } catch (err) {
        console.log(err);
        return res.json({ error: 'Valami félre ment:/' });
    };
};

const profile = (_: Request, res: Response) => {
    return res.json(res.locals.user);
};

const logout = (_: Request, res: Response) => {
    res.set('Set-Cookie', cookie.serialize('token', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        expires: new Date(0),
        path: '/'
    }));

    return res.status(200).json({ success: true });
};

const router = Router();

router.post('/register', register);

router.post('/login', login);
router.get('/logout', auth, logout);

router.get('/profile', auth, profile);

export default router;