/*
    Created by Sándor Király on 03/05/21.

    Copyright (c) OMEGA Magyarország Kft.
    All rights reserved.
*/

import React from 'react';
import Link from 'next/link';

import { FaSearch } from 'react-icons/fa';
import { Toggle } from '../../../helpers/ThemeToggle';

const MainHeader = () => {
    return (
        <>
            <nav className = 'sticky top-0 z-30 bg-white dark:bg-coolGray-900 transition duration-200 ease-in-out border-b border-gray-100 dark:border-coolGray-800'>
                <div className = 'w-full mx-auto px-2 px-6'>
                    <div className = 'relative flex items-center justify-between h-16'>
                        <div className = 'px-6 flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                            <div className = 'flex-shrink-0 flex items-center'>
                                <Link href = '/'>
                                    <a>
                                        <img src = 'https://i.imgur.com/ws2kAA0.png' className = 'w-6 h-6 mr-2' />
                                    </a>
                                </Link>
                            </div>
                        
                            <div className = 'ml-6'>
                                <div className = 'flex space-x-4'>
                                    <div className = 'px-6 py-2 mt-1'>                                        
                                        <div className = 'absolute left-0 top-0 mt-5 ml-18'>
                                            <FaSearch 
                                                className = 'text-gray-700 dark:text-coolGray-400' 
                                            />
                                        </div>
                                        
                                        <input
                                            className = 'p-2 pl-6 pr-6 transition duration-200 ease-in-out text-gray-800 dark:text-coolGray-300 bg-gray-100 dark:bg-coolGray-800 transition duration-200 ease-in-out hover:bg-gray-200 dark:hover:bg-coolGray-700 transition duration-200 ease-in-out focus-within:text-gray-800 dark:focus-within:text-white focus:outline-none w-600 rounded-8'
                                            placeholder = 'Keresés...'
                                            type = 'text'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className = 'flex-shrink-0 flex items-center space-x-4 lg:px-5'>
                            <button className = 'py-2 px-1 text-xs font-normal bg-white dark:bg-coolGray-900 text-gray-900 hover:text-gray-500 dark:border-coolGray-900 dark:text-white transition duration-200 ease-in-out hover:border-blue-300 dark:hover:text-coolGray-300 rounded-8'>
                                <Link href = '/login'>
                                    <a>
                                        Bejelentkezés
                                    </a>
                                </Link>
                            </button>

                            <button className = 'py-2 px-1 text-xs font-normal text-white bg-white bg-blue-500 dark:bg-coolGray-800 transition duration-200 ease-in-out hover:bg-blue-600 dark:hover:bg-coolGray-700 rounded-8'>
                                <Link href = '/register'>
                                    <a>
                                        Regisztráció
                                    </a>
                                </Link>
                            </button>

                            <Toggle />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default MainHeader;

/*
backdrop-filter backdrop-blur-lg

                        <div className = 'flex-shrink-0 flex items-right'>
                            <img src = 'https://i.imgur.com/ws2kAA0.png' className = 'w-6 h-6 mr-2' />
                        </div>

                        <div className = 'ml-3 relative'>
                            <div>
                                <button className = 'flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-500 focus:ring-white'>
                                    <img className = 'h-10 w-10 rounded-full' src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt = '' />
                                </button>
                            </div>
                        </div>
*/