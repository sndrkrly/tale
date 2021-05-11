/*
    Created by Sándor Király on 01/05/21.

    Copyright (c) OMEGA Magyarország Kft.
    All rights reserved.
*/

import React from 'react';
import Header from 'next/head';
import { NextPage } from 'next';

export interface HeaderControllerProps {
    title?: string;
    embed?: { hexColor?: string; image?: string };
    owner?: string;
    additionalKeywords?: string[];
    description?: string;
};

export const HeaderController: NextPage<HeaderControllerProps> = ({
    title,
    description = 'Vásárold meg álmaid cipőjét még ma!',
    owner = 'OMEGA Magyaroszág Kft',
    additionalKeywords,
    embed,
}) => {
    return (
        <Header>
            { title ? <title>{title} - tale</title> : <title>tale</title> };
            <meta name = 'description' content = {description} />
            { owner ? <meta name = 'author' content = {owner} /> : ''};
            <meta name = 'keywords' content = {`tale, tale${ additionalKeywords?.map((k) => `, ${k}`) }`} />
            <meta name = 'theme-color' content = {embed?.hexColor || '#efe7dd'} />
            {embed ? (
                <>
                    <meta name = 'og:title' content = {title || 'tale'} />
                    <meta name = 'og:description' content = {description} />
                    <meta name = 'og:site_name' content = 'tale' />
                </>
            ) : (
                ''
            )};
        </Header>
    );
};

// <meta name = 'og:image' content = {`${baseUrl || 'https://next.dogehouse.tv'}/img/doge.png`} />