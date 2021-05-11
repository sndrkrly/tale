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
            <div className = 'fixed py-6 bg-white dark:bg-coolGray-900 transition duration-200 ease-in-out border-b border-gray-100 dark:border-coolGray-800 w-635'>
                <h1 className = 'text-xl font-semibold text-black dark:text-white'>
                    Szép napot!
                </h1>

                <p className = 'text-base font-normal text-gray-500 dark:text-gray-400'>
                    Nézze meg ezeket a mai ajánlatokat.
                </p>
            </div>

            <div className = 'py-15 space-y-5 w-160'>
                {posts.map(post => (
                    <Link href = {post.url}>
                        <div key = {post.identifier} className = 'cursor-pointer transition duration-200 ease-in-out hover:bg-gray-200 dark:hover:bg-coolGray-700 transition duration-200 ease-in-out bg-gray-100 dark:bg-coolGray-800 rounded-8'>
                            <div className = 'lg:px-6 lg:py-4'>                                  
                                <div className = 'flex-shrink-0 flex items-center'>
                                    <Link href = {`/u/${post.username.slice(post.username.indexOf('@'), post.username.length).replace('@', '')}`}>
                                        <a>
                                            <img src = 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/132516912_2266186343525358_9013845069878408599_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=174925&_nc_ohc=BvXmJ2qY4kcAX8YYLer&_nc_ht=scontent-vie1-1.xx&oh=a559375b2f8917ebd60fee92833c4f38&oe=60BFEF99' className = 'w-6 h-6 mr-2 rounded-40 transition duration-200 ease-in-out hover:opacity-80' />
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

                                <p className = 'py-2 lg:pt-4 text-transform: uppercase text-gray-700 dark:text-coolGray-400 font-normal text-xs'>
                                    {post.subName}
                                </p>

                                <h2 className = 'flex-shrink-0 flex items-center text-black dark:text-white font-bold text-xl'>
                                    {post.name}

                                    <span className = 'inline-flex items-center justify-center px-2 py-1 ml-2 text-xs font-semibold leading-none transition duration-200 ease-in-out bg-gray-300 dark:bg-coolGray-900 text-gray-700 dark:text-coolGray-400 rounded-8'>
                                        {post.status}
                                    </span>
                                </h2>

                                <p className = 'text-gray-700 dark:text-coolGray-400 font-normal text-base'>
                                    {post.description}
                                </p>

                                <p className = 'text-gray-700 dark:text-coolGray-400 font-normal text-base'>
                                    {post.price} forint
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};