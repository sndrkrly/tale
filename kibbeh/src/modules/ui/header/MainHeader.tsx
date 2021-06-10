/*
    Created by Sándor Király on 03/05/21.

    Copyright (c) OMEGA Magyarország Kft.
    All rights reserved.
*/

import React, { useState } from 'react';
import Link from 'next/link';

import { FaSearch, FaAngleDown, FaClipboardCheck } from 'react-icons/fa';
import { HiMoon } from 'react-icons/hi';

import { Toggle } from '../../../helpers/ThemeToggle';

const MainHeader = () => {
    const [open, setOpen] = useState();

    return (
        <>
            <nav className = 'sticky top-0 z-30 backdrop-filter backdrop-blur-lg bg-opacity-70 bg-white dark:bg-opacity-30 dark:bg-coolGray-900 transition duration-200 ease-in-out border-b border-gray-100 dark:border-coolGray-800'>
                <div className = 'w-full mx-auto px-11 px-6'>
                    <div className = 'relative flex items-center justify-between h-16'>
                        <div className = 'px-6 flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                            <div className = 'flex-shrink-0 flex items-center'>
                                <Link href = '/'>
                                    <a>
                                        <img src = 'https://i.imgur.com/GBOgfkc.png' className = 'w-6 h-6 mr-2' />
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

                            <div onClick = {() => setOpen(!open)}>
                                {!open && 
                                    <div className = 'bg-gray-100 hover:bg-gray-200 dark:bg-coolGray-800 dark:hover:bg-coolGray-700 transition duration-500 ease-in-out rounded-8 p-2'>
                                        <FaAngleDown />
                                    </div>
                                }

                                {open && 
                                    <>
                                        <div className = 'bg-gray-200 hover:bg-gray-100 dark:bg-coolGray-700 dark:hover:bg-coolGray-800 transition duration-500 ease-in-out rounded-8 p-2'>
                                            <FaAngleDown />
                                        </div>

                                        <div className = 'absolute top-6.5 right-0 p-2 flex items-center justify-between h-16 transition duration-500 ease-in-out'>
                                            <div className = 'shadow-sm dark:shadow-2xl'>
                                                <div className = 'w-21 flex gap-2 flex-col bg-gray-100 dark:bg-coolGray-800 transition duration-500 ease-in-out rounded-8 p-2'>
                                                    <div className = 'px-2 hover:bg-gray-200 dark:hover:bg-coolGray-700 transition duration-500 ease-in-out  rounded-8'>
                                                        <h1 className = 'text-xl font-bold mb-1 mt-1'> <HiMoon /> </h1>

                                                        <p className = 'text-md font-semibold mb-1'>
                                                            Sötét mód
                                                        </p>
                                                        
                                                        <p className = 'text-xs font-normal text-black dark:text-gray-400 transition duration-500 ease-in-out mb-1'>
                                                            A tale megjelenítésének módosítása a csillogás és a szem terhelésének csökkentése érdekében.
                                                        </p>

                                                        <p className = 'cursor-pointer mb-1'>
                                                            <Toggle />
                                                        </p>
                                                    </div>                                                    

                                                    <div className = 'w-6 lg:py-1 border-b border-gray-300 dark:border-coolGray-700 transition duration-500 ease-in-out' />
                                                    
                                                    <div className = 'cursor-pointer px-2 hover:bg-gray-200 dark:hover:bg-coolGray-700 transition duration-500 ease-in-out rounded-8'>
                                                        <h1 className = 'text-xl font-bold mb-1 mt-2'> <FaClipboardCheck /> </h1>

                                                        <p className = 'text-md font-semibold mb-1'>
                                                            Visszajelzés
                                                        </p>
                                                        
                                                        <p className = 'text-xs font-normal text-black dark:text-gray-400 mb-2'>
                                                            Segítsen nekünk, hogy jobbá tegyük a tale-t.
                                                        </p>
                                                    </div>

                                                    <div className = 'w-6 lg:py-1 border-b border-gray-300 dark:border-coolGray-700 transition duration-500 ease-in-out' />

                                                    <div className = 'px-2 transition duration-500 ease-in-out'>
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
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default MainHeader;

/*
    <Toggle />
*/