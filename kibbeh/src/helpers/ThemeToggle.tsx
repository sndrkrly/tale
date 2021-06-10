/*
    Created by Sándor Király on 03/05/21.

    Copyright (c) OMEGA Magyarország Kft.
    All rights reserved.
*/

import Next from 'next';

import { useTheme } from 'next-themes';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';

export const Toggle = () => {
    const { theme, setTheme } = useTheme()

    return (
        <>
            {theme === 'dark' ? (
                <p>
                    <FaToggleOn onClick = {() => setTheme(theme === 'dark' ? 'light' : 'dark')} className = 'text-gray-500 dark:text-gray-400 text-2xl cursor-pointer' />                
                </p>
            ) : (
                <p>
                    <FaToggleOff onClick = {() => setTheme(theme === 'dark' ? 'light' : 'dark')} className = 'text-gray-500 dark:text-gray-400 text-2xl cursor-pointer' />
                </p>
            )}
        </>
    );
}