/*
    Created by Sándor Király on 30/04/21.

    Copyright (c) OMEGA Magyarország Kft.
    All rights reserved.
*/

import { Router, Request, Response } from 'express';

import auth from '../middleware/auth';

import Post from '../entities/Post';
import Sub from '../entities/Sub';

const createPost = async (req: Request, res: Response) => {
    const { name, description, price, place, status, isPinned, sub } = req.body;
    const user = res.locals.user;
    
    if (name.trim() === '') return res.status(400).json({ title: 'A cím nem lehet üres!' });
    if (description.trim() === '') return res.status(400).json({ title: 'A leírás nem lehet üres!' });
    if (price.trim() === '') return res.status(400).json({ title: 'Az ár nem lehet üres!' });
    if (place.trim() === '') return res.status(400).json({ title: 'Az hely nem lehet üres!' });
    if (sub.trim() === '') return res.status(400).json({ title: 'A típus nem lehet üres!' });

    try {
        const subRecord =  await Sub.findOneOrFail({ name: sub });

        const post = new Post({ name, description, price, place, status, isPinned, user, sub: subRecord });
        await post.save();

        return res.json(post);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Valami félre ment:/' });
    };
};

const getPosts = async (_: Request, res: Response) => {
    try {
        const posts = await Post.find({
            order: { createdAt: 'DESC' },
        });

        return res.json(posts);
    } catch(err) {
        console.log(err);
        return res.status(500).json({ error: 'Valami félre ment:/' });
    };
};

const getPost = async (req: Request, res: Response) => {
    const { identifier, slug } = req.params;
    
    try {
        const post = await Post.findOneOrFail({ identifier, slug }, {
            relations: [ 'sub' ],
        });

        return res.json(post);
    } catch(err) {
        console.log(err);
        return res.status(404).json({ error: 'Bejegyzés nem található!' });
    };
};

const router = Router();

router.post('/', auth, createPost);
router.get('/', getPosts);
router.get('/:identifier/:slug', getPost);

export default router;