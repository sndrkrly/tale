/*
    Created by Sándor Király on 01/05/21.

    Copyright (c) OMEGA Magyarország Kft.
    All rights reserved.
*/

import React from 'react';
import { ThemeProvider } from 'next-themes';

import MainHeader from '../ui/header/MainHeader';
import RightHeader from '../ui/header/RightHeader';

const Layout = (props) => {
    const { children } = props;

    return (
        <>
            <ThemeProvider attribute = 'class'>
                <body className = 'transition duration-200 ease-in-out bg-white dark:bg-coolGray-900'>
                    <MainHeader />                
                    <RightHeader />

                    <div className = 'ml-19 w-635 h-full'>
                        <main className = 'flex-grow'>
                            {children}
                        </main>
                    </div>    
                </body>
            </ThemeProvider>
        </>
    );
};

export default Layout;