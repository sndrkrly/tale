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

            <main className = 'flex grid w-full h-full'>
                <div className = 'flex items-center justify-center min-w-screen min-h-screen bg-primary-900'>
                    <h1 className = 'font-extrabold text-primary-100 sm:text-5xl'>
                        404
                    </h1>

                    <p className = 'font-normal text-primary-100 sm:text-3xl ml-5'>
                        Az oldal nem található.
                    </p>
                </div>
            </main>
        </>
    );
}