/*
    Created by Sándor Király on 01/05/21.

    Copyright (c) OMEGA Magyarország Kft.
    All rights reserved.
*/

import Layout from '../modules/layout/MainLayout';

import { HeaderController } from '../modules/display/HeaderController';
import { FeedController } from '../modules/feed/FeedController';

export default function Home() {
    return (
        <>
            <HeaderController embed = {{}} />
            
            <Layout>
                <FeedController />
            </Layout>
        </>
    );
};