import React, { useEffect, useState } from 'react';
import Head from "next/head";
import config from 'react-reveal/globals';

import '../../styles/bootstrap.min.css';
import '../../styles/styles.css';

const seoTags = {
    "siteName": "Amrita ShaktiCon",
    "tagLine": "CyberSecurity Conference, Trainings & Competition exclusively for Women",
    "description": "Participate in Amrita ShaktiCon, cyber security conference, trainings and competitions exclusively for women, organized by team Shakti."
};

const Base = ({ children, meta }) => {
    config({ ssrFadeout: true });

    const title = `${meta && meta.title ? `${meta.title} |` : ''} ${seoTags.siteName} - ${seoTags.tagLine}`;
    const GoogleAnalyticsID = 'G-16XVQFQLWQ';
    const [addPixelCode, setAddPixelCode] = useState(false);

    useEffect(() => {
        setAddPixelCode(true)
    }, [])

    return <React.Fragment>
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8'/>
            <meta name='theme-color' content='#E65100' />
            <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
            <meta name="description" content={meta && meta.description ? meta.description : seoTags.description} />
            <meta name="twitter:title" content={title} />
            <meta property="og:title" content={title} />
            {meta && meta.image && <meta property="og:image" content={meta.image} />}
            <meta name="viewport" content="width=device-width, minimum-scale=1, shrink-to-fit=no, initial-scale=1" />
            <link rel="manifest" href="/manifest.json" />
            <link href='/images/icons/icon-72x72.png' rel='icon' type='image/png' sizes='72x72' />
            <link href='/images/icons/icon-96x96.png' rel='icon' type='image/png' sizes='96x96' />
            <link href='/images/icons/icon-128x128.png' rel='icon' type='image/png' sizes='128x128' />
            <link href='/images/icons/icon-152x152.png' rel='icon' type='image/png' sizes='144x144' />
            <link href='/images/icons/icon-152x152.png' rel='icon' type='image/png' sizes='152x152' />
            <link href='/images/icons/icon-192x192.png' rel='icon' type='image/png' sizes='192x192' />
            <link href='/images/icons/icon-384x384.png' rel='icon' type='image/png' sizes='384x384' />
            <link rel='apple-touch-icon' href='/images/icons/icon-512x512.png' />
            <link rel="shortcut icon" href="../images/icons/icon-72x72.png" />
            {   GoogleAnalyticsID && <React.Fragment>
                <script rel="preconnect" async src={`https://www.googletagmanager.com/gtag/js?id=${GoogleAnalyticsID}`} />
                <script dangerouslySetInnerHTML={{
                    __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GoogleAnalyticsID}');`
                }} />
            </React.Fragment>}
            {addPixelCode &&
            <React.Fragment>
                <script dangerouslySetInnerHTML={{
                    __html: `
                     !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '1097841020683398');
                    fbq('track', 'PageView');
                `
                }} />
                <noscript>
                    <img
                        height="1" width="1" style="display:none"
                        src="https://www.facebook.com/tr?id=1097841020683398&ev=PageView&noscript=1"
                    />
                </noscript>
            </React.Fragment>}
        </Head>
        <div className="app">
            {children}
        </div>
    </React.Fragment>
};

export default Base;

