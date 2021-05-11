/*
    Created by Sándor Király on 03/05/21.

    Copyright (c) OMEGA Magyarország Kft.
    All rights reserved.
*/

import Next from 'next';

import { useTheme } from 'next-themes';
import { HiMoon, HiSun } from 'react-icons/hi';

export const Toggle = () => {
    const { theme, setTheme } = useTheme()

    return (
        <div className = 'bg-gray-100 hover:bg-gray-200 dark:bg-coolGray-800 dark:hover:bg-coolGray-700 transition duration-500 ease-in-out rounded-8 p-2'>
            {theme === 'dark' ? (
                <HiSun
                    onClick = {() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className = 'text-gray-500 dark:text-gray-400 text-2xl cursor-pointer'
                />
            ) : (
                <HiMoon
                    onClick = {() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className = 'text-gray-500 dark:text-gray-400 text-2xl cursor-pointer'
                />
            )}
        </div>
    );
}