/*
    Created by Sándor Király on 30/04/21.

    Copyright (c) OMEGA Magyarország Kft.
    All rights reserved.
*/

import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name = 'viewport' content = 'width=device-width, initial-scale=1, user-scalable=no, user-scalable=0' />
            </Head>
            
            <Component {...pageProps} />
        </>
    );
};

export default App;
