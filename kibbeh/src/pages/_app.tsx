/*
    Created by Sándor Király on 30/04/21.

    Copyright (c) OMEGA Magyarország Kft.
    All rights reserved.
*/

import '../styles/globals.css';

import { AppProps } from 'next/app';
import Head from 'next/head';

require('dayjs/locale/hu');

import Axios from 'axios';
Axios.defaults.baseURL = 'http://localhost:5000/api';
Axios.defaults.withCredentials = true;

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