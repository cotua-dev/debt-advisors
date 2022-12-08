import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
    public render(): JSX.Element {
        return (
            <Html lang="en">
                <Head>
                    {process.env.NEXT_PUBLIC_GTM &&
                        <Script
                            id="google-tag-manager"
                            strategy="afterInteractive"
                            dangerouslySetInnerHTML={{__html: `
                                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                                })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM}');
                            `}}
                        ></Script>
                    }
                    {process.env.NEXT_PUBLIC_GTAG &&
                        <Script
                            id="google-tag-one-script"
                            strategy="afterInteractive"
                            async
                            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG}`}
                        ></Script>
                    }
                    {process.env.NEXT_PUBLIC_GTAG && process.env.NEXT_PUBLIC_GTM_PAGE_VIEW &&
                        <Script
                            id="google-tag-one-custom"
                            strategy="afterInteractive"
                            dangerouslySetInnerHTML={{__html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${process.env.NEXT_PUBLIC_GTAG}');
                                gtag('event', 'conversion', {'send_to': '${process.env.NEXT_PUBLIC_GTAG}/${process.env.NEXT_PUBLIC_GTM_PAGE_VIEW}'});
                            `}}
                        ></Script>
                    }
                    <Script
                        id="google-tag-two-script"
                        strategy="afterInteractive"
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=G-6G04CZNE90"
                    ></Script>
                    <Script
                        id="google-tag-two-custom"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{__html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-6G04CZNE90');
                        `}}
                    ></Script>
                    {process.env.NEXT_PUBLIC_FBQ1 && process.env.NEXT_PUBLIC_FBQ2 &&
                        <Script
                            id="facebook-script"
                            strategy="afterInteractive"
                            dangerouslySetInnerHTML={{__html:`
                                !function(f,b,e,v,n,t,s)
                                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                                n.queue=[];t=b.createElement(e);t.async=!0;
                                t.src=v;s=b.getElementsByTagName(e)[0];
                                s.parentNode.insertBefore(t,s)}(window, document,'script',
                                'https://connect.facebook.net/en_US/fbevents.js');
                                fbq('init', '${process.env.NEXT_PUBLIC_FBQ1}');
                                fbq('init', '${process.env.NEXT_PUBLIC_FBQ2}');
                                fbq('track', 'PageView', null, {eventID: 'page_view_${new Date().getTime()}'});
                            `}}
                        ></Script>
                    }
                    {process.env.NEXT_PUBLIC_TIK_TOK &&
                        <Script
                            id="tik-tok-pixel"
                            strategy="afterInteractive"
                            dangerouslySetInnerHTML={{__html:`
                            !function (w, d, t) {
                                w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
                                ttq.load('${process.env.NEXT_PUBLIC_TIK_TOK}');
                                ttq.page();
                            }(window, document, 'ttq');
                            `}}
                        ></Script>
                    }
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"/>
                    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `
                        {
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "image": [
                                "https://www.debtadvisorsofamerica.com/images/icons/android/android-launchericon-512-512.png"
                            ],
                            "name": "Debt Advisors of America",
                            "priceRange": "$$$",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "6863 Friars Rd Ste 101",
                                "addressLocality": "San Diego",
                                "addressRegion": "CA",
                                "postalCode": "92108-1266",
                                "addressCountry": "US"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": 32.7682309039158,
                                "longitude": -117.17241555980162
                            },
                            "telephone": "+18006320437",
                            "openingHoursSpecification": [
                                {
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": [
                                        "Monday",
                                        "Tuesday",
                                        "Wednesday",
                                        "Thursday",
                                        "Friday"
                                    ],
                                    "opens": "06:00",
                                    "closes": "19:00"
                                },
                                {
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": [
                                        "Saturday"
                                    ],
                                    "opens": "07:00",
                                    "closes": "14:00"
                                }
                            ]
                        }
                    `}}></script>
                    <script dangerouslySetInnerHTML={{__html: `
                    var script = document.createElement('script');
                    script.async = true; script.type = 'text/javascript';
                    var target = 'https://www.clickcease.com/monitor/stat.js';
                    script.src = target;var elem = document.head;elem.appendChild(script);
                    `}}></script>
                    <meta name="google-site-verification" content="K5XkTynh2jWVW2scOiufUcJKDHMqI9H9BB33any5Vo0"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                    {process.env.NEXT_PUBLIC_GTM &&
                        <noscript>
                            <iframe
                                src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM}`}
                                height="0"
                                width="0"
                                style={{display:'none',visibility:'hidden'}}
                            ></iframe>
                        </noscript>
                    }
                    {process.env.NEXT_PUBLIC_FBQ &&
                        <noscript>
                            <img
                                height="1"
                                width="1"
                                style={{display:'none'}}
                                alt="Facebook Img"
                                src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FBQ}&ev=PageView&noscript=1`}
                            />
                        </noscript>
                    }
                    <noscript>
                        <a href="https://www.clickcease.com" rel="nofollow">
                            <img src="https://monitor.clickcease.com/stats/stats.aspx" alt="ClickCease"/>
                        </a>
                    </noscript>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
