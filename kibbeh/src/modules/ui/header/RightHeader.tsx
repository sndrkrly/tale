/*
    Created by Sándor Király on 10/05/21.

    Copyright (c) OMEGA Magyarország Kft.
    All rights reserved.
*/

import { useEffect, useState } from 'react';
import { Post } from '../../../types';

import Link from 'next/link';
import Axios from 'axios';
import dayjs from 'dayjs';

import relativeTime from 'dayjs/plugin/relativeTime';
import locale from 'dayjs/locale/hu';
dayjs.extend(relativeTime);
dayjs.locale(locale);

const RightHeader = () => {
    const [ posts, setPosts ] = useState<Post[]>([]);

    useEffect(() => {
        Axios.get('/posts')
            .then((res) => setPosts(res.data))
            .catch((err) => console.log(err))
    }, []);

    return (
        <>
            <main className = 'fixed top-5 left-850'>
                <div className = 'float-right lg:px-8 lg:py-11'>
                    <div className = 'flex-shrink-0 flex items-center'>
                        <div className = 'flex flex-col w-6l h-6l bg-gray-100 dark:bg-coolGray-800 rounded-8'>  
                            <div className = 'flex-grow overflow-y-auto'>
                                <div className = 'fixed backdrop-filter backdrop-blur-lg bg-opacity-70 dark:bg-opacity-80 w-55l ml-1 px-4 lg:py-3 bg-gray-100 dark:bg-coolGray-800 rounded-8'>
                                    <h1 className = 'text-lg font-semibold text-black dark:text-white'>
                                        Kitűzött hírdetések
                                    </h1>

                                    <div className = 'w-6 lg:py-1 border-b border-gray-300 dark:border-coolGray-700' />
                                </div>

                                <div className = 'lg:py-8 space-y-4 px-2'>
                                    {posts.map(post => {
                                        if (post.isPinned === 'true') {
                                            return (
                                                <>
                                                    <Link href = {post.url}>
                                                        <div key = {post.identifier} className = 'cursor-pointer lg:py-3 lg:px-4 rounded-5 transition duration-200 ease-in-out hover:bg-gray-200 dark:hover:bg-coolGray-700'>
                                                            <div className = 'flex-shrink-0 flex items-center'>
                                                                <Link href = {`/u/${post.username.slice(post.username.indexOf('@'), post.username.length).replace('@', '')}`}>
                                                                    <a>
                                                                        <img src = 'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/e5/e56a7f70064f2e875bc39011acab978dfccc7764_full.jpg' className = 'w-6 h-6 mr-2 rounded-40 transition duration-200 ease-in-out hover:opacity-80' />
                                                                    </a>
                                                                </Link>
                                                                
                                                                <h1 className = 'text-black dark:text-white font-semibold text-base'>
                                                                    <Link href = {`/u/${post.username.slice(post.username.indexOf('@'), post.username.length).replace('@', '')}`}>
                                                                        <a className = 'transition duration-200 ease-in-out hover:opacity-70'>
                                                                            {post.username.slice(0, post.username.indexOf('@'))}
                                                                        </a>
                                                                    </Link>

                                                                    <p className = 'text-gray-700 dark:text-coolGray-400 font-normal text-xs'>
                                                                    {dayjs(post.createdAt).fromNow()}, {post.place}
                                                                    </p>
                                                                </h1>
                                                            </div>

                                                            <div className = 'lg:py-2'>
                                                                <p className = 'text-black dark:text-white font-bold text-sm'>
                                                                    {post.name}

                                                                    <span className = 'inline-flex items-center justify-center px-1 py-1 ml-1 text-xs font-semibold leading-none transition duration-200 ease-in-out bg-gray-300 dark:bg-coolGray-900 text-gray-700 dark:text-coolGray-400 rounded-8'>
                                                                        {post.status}
                                                                    </span>
                                                                </p>

                                                                <p className = 'text-black dark:text-white font-normal text-sm'>
                                                                    {post.description}
                                                                </p>

                                                                <p className = 'text-black dark:text-white font-normal text-sm'>
                                                                    {post.price} Ft
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className = 'lg:py-5 mt-5 px-1 flex-shrink-0 flex items-center'>
                        <div className = 'w-55l ml-1 px-4 lg:py-3'>
                            <p className = 'text-black dark:text-white font-normal text-xs'>
                                Adatvédelmi irányelvek · Szolgáltatási feltételek ·
                                Névjegy · Fejlesztők
                            </p>

                            <div className = 'py-1 text-gray-500 dark:text-gray-400 font-normal text-xs'>
                                <p>OMEGA Magyarország Kft. © 2021.</p>
                                <p>Minden jog fenntartva.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

/*

Erről egy szót se, jó? ><
~ Sanyi

<div className = 'space-y-2 py-1 text-gray-500 dark:text-gray-400 font-normal text-xs'>
    <p>OMEGA Magyarország Kft. © 2021.</p>
    <p>Minden jog fenntartva.</p>
</div>
*/

export default RightHeader;