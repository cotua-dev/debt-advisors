import { SHA256 } from "crypto-js";

export function insertTrackingScripts() {
    const amount: string | null = localStorage.getItem('amount');
    const email: string | null = localStorage.getItem('email');
    const phone: string | null = localStorage.getItem('phone');
    const firstName: string | null = localStorage.getItem('firstName');
    const lastName: string | null = localStorage.getItem('lastName');
    const city: string | null = localStorage.getItem('city');
    const state: string | null = localStorage.getItem('state');

    const bodyEl: HTMLBodyElement | null = document.querySelector("body");
    if (bodyEl !== null) {
        // Add Tiktok track script
        /*
        let tikTokTrackScript: HTMLElement | null = document.getElementById("tik-tok-track-script");
        if (tikTokTrackScript === null) {
            tikTokTrackScript = document.createElement("script");
            tikTokTrackScript.id = "tik-tok-track-script";
            tikTokTrackScript.append(
                `ttq.instance("CEHM5CBC77UDF9719OR0");
                ttq.track("SubmitForm", {
                    value: ${Number(amount) || 0},
                    currency: "USD",
                    content_type: "product",
                    content_id: "1",
                    content_name: "stepper",
                });`
            );

            bodyEl.append(tikTokTrackScript);
        }
        */

        // Add Clickcease noscript
        let clickCeaseNoscript: HTMLElement | null = document.getElementById("click-cease-noscript");
        if (clickCeaseNoscript === null) {
            clickCeaseNoscript = document.createElement("noscript");
            clickCeaseNoscript.id = "click-cease-noscript";

            clickCeaseNoscript.append(
                `<a href="https://www.clickcease.com" rel="nofollow">
                    <img src="https://monitor.clickcease.com/stats/stats.aspx" alt="ClickCease"/>
                </a>`
            );

            bodyEl.prepend(clickCeaseNoscript);
        }

        // Add Facebook pixel noscripts
        let facebookPixelNoscript1: HTMLElement | null = document.getElementById("facebook-pixel-noscript-1");
        let facebookPixelNoscript2: HTMLElement | null = document.getElementById("facebook-pixel-noscript-2");
        
        if (facebookPixelNoscript2 === null) {
            facebookPixelNoscript2 = document.createElement("noscript");
            facebookPixelNoscript2.id = "facebook-pixel-noscript-2";

            facebookPixelNoscript2.append(
                `<img height="1" width="1" style="display:none;visibility:hidden;" alt="Facebook Img"
                src="https://www.facebook.com/tr?id=5736031759798138&ev=PageView&noscript=1"/>`
            );
            bodyEl.prepend(facebookPixelNoscript2);
        }

        if (facebookPixelNoscript1 === null) {
            facebookPixelNoscript1 = document.createElement("noscript");
            facebookPixelNoscript1.id = "facebook-pixel-noscript-1";

            facebookPixelNoscript1.append(
                `<img height="1" width="1" style="display:none;visibility:hidden;" alt="Facebook Img"
                src="https://www.facebook.com/tr?id=1011657849590069&ev=PageView&noscript=1"/>`
            );
            bodyEl.prepend(facebookPixelNoscript1);
        }

        // Add GTM noscript
        let gtmNoscript: HTMLElement | null = document.getElementById("gtm-noscript");
        if (gtmNoscript === null) {
            gtmNoscript = document.createElement("noscript");
            gtmNoscript.id = "gtm-noscript";

            gtmNoscript.append(
                `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5ZWB77B" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
            );
            bodyEl.prepend(gtmNoscript);
        }
    }

    const headEl: HTMLHeadElement | null = document.querySelector("head");
    if (headEl !== null) {
        // Add Clickcease script
        let clickCeaseScript: HTMLElement | null = document.getElementById("click-cease");
        if (clickCeaseScript === null) {
            clickCeaseScript = document.createElement("script");
            clickCeaseScript.id = "click-cease";
            clickCeaseScript.append(`
                var script = document.createElement('script');
                script.async = true; script.type = 'text/javascript';
                var target = 'https://www.clickcease.com/monitor/stat.js';
                script.src = target;var elem = document.head;elem.appendChild(script);
            `);

            headEl.prepend(clickCeaseScript);
        }

        // Add Tiktok pixel script
        let tikTokPixelScript: HTMLElement | null = document.getElementById("tik-tok-pixel");
        if (tikTokPixelScript === null) {
            tikTokPixelScript = document.createElement("script");
            tikTokPixelScript.id = "tik-tok-pixel";
            tikTokPixelScript.append(`
                !function (w, d, t) {
                    w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++
                        )ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=i+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};

                    ttq.load("CEHM5CBC77UDF9719OR0");
                    ttq.page();

                    ttq.instance("CEHM5CBC77UDF9719OR0");
                    ttq.track("SubmitForm", {
                        value: ${Number(amount) || 0},
                        currency: "USD",
                        content_type: "product",
                        content_id: "1",
                        content_name: "stepper",
                    });
                }(window, document, 'ttq');
            `);

            headEl.prepend(tikTokPixelScript);
        }

        // Add Facebook Pixel script
        let facebookPixelScript: HTMLElement | null = document.getElementById("facebook-script");
        if (facebookPixelScript === null) {
            facebookPixelScript = document.createElement("script");
            facebookPixelScript.id = "facebook-script";
            facebookPixelScript.append(`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq("init", "1011657849590069");
                fbq("init", "5736031759798138");

                fbq("trackSingle", "1011657849590069", "SubmitApplication");
                fbq("trackSingleCustom", "1011657849590069", "ClickCeaseInvalidUsersLive");

                fbq("trackSingle", "5736031759798138", "Lead");
                fbq("trackSingleCustom", "5736031759798138", "ClickCeaseInvalidUsersLive");

                fbq("track", "PageView");
            `);
            // facebookPixelScript.append(`
            //     !function(f,b,e,v,n,t,s)
            //     {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            //     n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            //     if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            //     n.queue=[];t=b.createElement(e);t.async=!0;
            //     t.src=v;s=b.getElementsByTagName(e)[0];
            //     s.parentNode.insertBefore(t,s)}(window, document,'script',
            //     'https://connect.facebook.net/en_US/fbevents.js');
            //     fbq('init', '1011657849590069');
            //     fbq("trackSingle", "1011657849590069", "SubmitApplication");
            //     fbq("trackSingle", "1011657849590069", "Lead", {
            //         content_category: "product",
            //         content_name: "stepper",
            //         currency: "USD",
            //         value: ${Number(amount) || 0},
            //         em: "${email !== null ? SHA256(email).toString() : ""}",
            //         ph: "${phone !== null ? SHA256(phone).toString() : ""}",
            //         fn: "${firstName !== null ? SHA256(firstName).toString() : ""}",
            //         ln: "${lastName !== null ? SHA256(lastName).toString() : ""}",
            //         ct: "${city !== null ? SHA256(city).toString() : ""}",
            //         st: "${state !== null ? SHA256(state).toString() : ""}",
            //     }, { eventID: "lead_${new Date().getTime()}" });
            //     fbq("trackSingleCustom", "1011657849590069", "ClickCeaseInvalidUsersLive", {
            //         em: "${email !== null ? SHA256(email).toString() : ""}",
            //         ph: "${phone !== null ? SHA256(phone).toString() : ""}",
            //     }, { eventID: "click_cease_invalid_users_live_${new Date().getTime()}" });

            //     fbq('init', '5736031759798138');
            //     fbq("trackSingle", "5736031759798138", "Lead", {
            //         content_category: "product",
            //         content_name: "stepper",
            //         currency: "USD",
            //         value: ${Number(amount) || 0},
            //         em: "${email !== null ? SHA256(email).toString() : ""}",
            //         ph: "${phone !== null ? SHA256(phone).toString() : ""}",
            //         fn: "${firstName !== null ? SHA256(firstName).toString() : ""}",
            //         ln: "${lastName !== null ? SHA256(lastName).toString() : ""}",
            //         ct: "${city !== null ? SHA256(city).toString() : ""}",
            //         st: "${state !== null ? SHA256(state).toString() : ""}",
            //     }, { eventID: "lead_${new Date().getTime()}" });
            //     fbq("trackSingleCustom", "5736031759798138", "ClickCeaseInvalidUsersLive", {
            //         em: "${email !== null ? SHA256(email).toString() : ""}",
            //         ph: "${phone !== null ? SHA256(phone).toString() : ""}",
            //     }, { eventID: "click_cease_invalid_users_live_${new Date().getTime()}" });

            //     fbq('track', 'PageView');
            // `);

            headEl.append(facebookPixelScript);
        }

        // Add Google Tag setup script
        let googleTagCustomScript: HTMLElement | null = document.getElementById("google-tag-custom");
        if (googleTagCustomScript === null) {
            googleTagCustomScript = document.createElement("script");
            googleTagCustomScript.id = "google-tag-custom";
            googleTagCustomScript.append(`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config','AW-315822587', {'allow_enhanced_conversions':true});

                var enhanced_conversion_data = {
                    email: "${email || ""}",
                    phone: "${phone || ""}",
                    firstName: "${firstName || ""}",
                    lastName: "${lastName || ""}",
                    city: "${city || ""}",
                    state: "${state || ""}",
                };

                gtag("event", "conversion", {
                    send_to: "AW-315822587/eO1NCPPzzPQCEPujzJYB",
                    value: ${Number(amount) || 0},
                    currency: "USD",
                });
            `);

            headEl.prepend(googleTagCustomScript);
        }

        // Add Google Tag script
        let googleTagScript: HTMLElement | null = document.getElementById("google-tag-script");
        if (googleTagScript === null) {
            googleTagScript = document.createElement("script");
            googleTagScript.id = "google-tag-script";
            (googleTagScript as HTMLScriptElement).async = true;
            (googleTagScript as HTMLScriptElement).src = "https://www.googletagmanager.com/gtag/js?id=AW-315822587";

            headEl.prepend(googleTagScript);
        }

        // Add GTM script
        let googleTagManagerScript: HTMLElement | null = document.getElementById("google-tag-manager");
        if (googleTagManagerScript === null) {
            googleTagManagerScript = document.createElement("script");
            googleTagManagerScript.id = "google-tag-manager";
            googleTagManagerScript.append(`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-5ZWB77B');
            `);

            headEl.prepend(googleTagManagerScript);
        }

        // Add Google Enhanced Conversions data
        /*
        let enhancedConversionDataScript: HTMLElement | null = document.getElementById("google-enhanced-conversions-data-script");
        if (enhancedConversionDataScript === null) {
            enhancedConversionDataScript = document.createElement("script");
            enhancedConversionDataScript.id = "google-enhanced-conversions-data-script";
            // enhancedConversionDataScript.append(
            //     `var enhanced_conversion_data = {
            //         "email": "${email || ""}",
            //         "phone": "${phone || ""}",
            //         "first_name": "${firstName || ""}",
            //         "last_name": "${lastName || ""}",
            //         "home_address": {
            //             "city": "${city || ""}",
            //             "state": "${state || ""}",
            //         },
            //     };`
            // );
            enhancedConversionDataScript.append(
                `var enhanced_conversion_data = {
                    email: "${email || ""}",
                    phone: "${phone || ""}",
                    firstName: "${firstName || ""}",
                    lastName: "${lastName || ""}",
                    city: "${city || ""}",
                    state: "${state || ""}",
                };`
            );

            headEl.append(enhancedConversionDataScript);
        }
        */

        // Add Google Tag Conversion script
        /*
        let googleTagConversionScript: HTMLElement | null = document.getElementById("google-tag-conversion");
        if (googleTagConversionScript === null) {
            googleTagConversionScript = document.createElement("script");
            googleTagConversionScript.id = "google-tag-conversion";
            googleTagConversionScript.append(
                `gtag("event", "conversion", {
                    send_to: "AW-315822587/eO1NCPPzzPQCEPujzJYB",
                    value: ${Number(amount) || 0},
                    currency: "USD",
                });`
            );

            headEl.append(googleTagConversionScript);
        }
        */
    }
}
