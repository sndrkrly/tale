/*
    Created by Sándor Király on 01/05/21.

    Copyright (c) OMEGA Magyarország Kft.
    All rights reserved.
*/

import { useEffect, useState } from 'react';
import { Post } from '../../types';

import Link from 'next/link';
import Axios from 'axios';
import dayjs from 'dayjs';

import relativeTime from 'dayjs/plugin/relativeTime';
import locale from 'dayjs/locale/hu';
dayjs.extend(relativeTime);
dayjs.locale(locale);

export const FeedController = () => {
    const [ posts, setPosts ] = useState<Post[]>([]);

    useEffect(() => {
        Axios.get('/posts')
            .then((res) => setPosts(res.data))
            .catch((err) => console.log(err))
    }, []);

    return (
        <>
            <div className = 'py-6 bg-white dark:bg-coolGray-900 transition duration-200 ease-in-out w-600'>
                <h1 className = 'text-xl font-semibold text-black dark:text-white'>
                    Szép napot!
                </h1>

                <p className = 'text-base font-normal text-gray-500 dark:text-gray-400'>
                    Nézze meg ezeket a mai ajánlatokat.
                </p>

                <div className = 'w-6 lg:py-3 py-3 border-b border-gray-300 dark:border-coolGray-700' />
            </div>

            <div className = 'py-0 space-y-5 w-160'>
                {posts.map(post => (
                    <Link href = {post.url}>
                        <div key = {post.identifier} className = 'cursor-pointer transition duration-200 ease-in-out hover:bg-gray-200 dark:hover:bg-coolGray-700 transition duration-200 ease-in-out bg-gray-100 dark:bg-coolGray-800 rounded-8'>
                            <div className = 'lg:px-6 lg:py-4'>                                  
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

                                <div className = 'py-2 lg:pt-4 text-transform: uppercase text-gray-700 dark:text-coolGray-400 font-normal text-xs'>
                                    <span className = 'inline-flex items-center justify-center px-2 py-1 font-semibold leading-none transition duration-200 ease-in-out bg-gray-300 dark:bg-coolGray-900 text-gray-700 dark:text-coolGray-400 rounded-8'>
                                        {post.subName}
                                    </span>

                                    <span className = 'inline-flex items-center justify-center px-2 py-1 ml-2 font-semibold leading-none transition duration-200 ease-in-out bg-gray-300 dark:bg-coolGray-900 text-gray-700 dark:text-coolGray-400 rounded-8'>
                                        WTB
                                    </span>
                                </div>

                                <div className = 'flex-shrink-0 flex items-center'>
                                    <h1 className = 'text-black dark:text-white font-bold text-lg'>
                                        {post.name}
                                    </h1>


                                    <span className = 'inline-flex items-center justify-center px-2 py-1 ml-2 text-xs font-semibold leading-none transition duration-200 ease-in-out bg-gray-300 dark:bg-coolGray-900 text-gray-700 dark:text-coolGray-400 rounded-8'>
                                        {post.status}
                                    </span>
                                </div>

                                <p className = 'text-gray-700 dark:text-coolGray-400 font-normal text-base'>
                                    {post.description}
                                </p>

                                <div className = 'flex-shrink-0 flex py-2'>
                                    <p className = 'text-gray-700 dark:text-coolGray-400 font-normal text-base'>
                                        {post.price} Ft
                                    </p>

                                    <p className = 'ml-2 text-gray-400 dark:text-coolGray-500 line-through'>
                                        25.000 Ft
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};