/*
    Created by Sándor Király on 30/04/21.

    Copyright (c) OMEGA Magyarország Kft.
    All rights reserved.
*/

import Head from 'next/head';

export default function Custom404() {
    return (
        <>
            <Head>
                <title>Nem található - tale</title>
                <link rel = 'icon' href = '/favicon.ico' />
            </Head>

            <main className = 'bg-white dark:bg-coolGray-900 flex grid w-full h-full'>
                <div className = 'flex items-center justify-center min-w-screen min-h-screen'>
                    <div className = 'flex m-auto flex-col p-6 gap-5 sm:rounded-8 z-10 sm:w-400 w-400'>
                        <div className = 'flex gap-2 flex-col text-left'>
                            <h1 className = 'font-extrabold text-black dark:text-coolGray-100 sm:text-3xl'>
                               <img src = 'https://i.imgur.com/GBOgfkc.png' width = '32' height = '32'/> Nem található.
                            </h1>

                            <p className = 'text-gray-500 dark:text-coolGray-100 flex-wrap text-base'>
                                A keresett oldal nem található.
                            </p> 

                            <div className = 'mt-2'>
                                <div className = 'py-1 text-gray-500 dark:text-gray-400 font-normal text-xs'>
                                    <p>OMEGA Magyarország Kft. © 2021.</p>
                                    <p>Minden jog fenntartva.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}