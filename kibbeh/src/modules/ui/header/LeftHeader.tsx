/*
    Created by Sándor Király on 05/06/21.

    Copyright (c) OMEGA Magyarország Kft.
    All rights reserved.
*/

import React from 'react';
import Link from 'next/link';

const LeftHeader = () => {
    return (
        <>
            <main className = 'fixed top-12.5 left-11.5 flex flex-col w-12.5 h-6l text-left'>
                <h1 className = 'text-lg font-semibold text-black dark:text-white'>
                    Felhasználók
                </h1>

                <p className = 'py-2 text-sm uppercase font-normal text-gray-500 dark:text-gray-400'>
                    Online
                </p>
            </main>
        </>
    )
}

export default LeftHeader;