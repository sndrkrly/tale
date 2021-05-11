/*
    Created by Sándor Király on 29/04/21.

    Copyright (c) OMEGA Magyarország Kft.
    All rights reserved.
*/

import { createConnection } from 'typeorm';
import 'reflect-metadata';

import cookieParser from 'cookie-parser';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

import postRoutes from './routes/posts';
import authRoutes from './routes/auth';
import subRoutes from './routes/subs';

import trim from './middleware/trim';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(trim);
app.use(
    cors({ 
        credentials: true,
        origin: process.env.ORIGIN,
        optionsSuccessStatus: 200,
    })
);

app.get('/', (_, res) => res.send('Hello World!'));

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/subs', subRoutes);

app.listen(PORT, async () => {
    console.log(`Server running at port:${PORT}`);

    try {
        await createConnection();
        console.log('Database connected!'); 
    } catch (err) {
        console.log(err);
    }
});