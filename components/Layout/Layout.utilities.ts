function onThankYouPages(): boolean {
    return window.location.pathname === "/thanks" ||
        window.location.pathname === "/thank-you" ||
        window.location.pathname === "/colorado/thank-you" ||
        window.location.pathname === "/credit-card/thank-you" ||
        window.location.pathname === "/debt/thank-you" ||
        window.location.pathname === "/medical/thank-you" ||
        window.location.pathname === "/new-jersey/thank-you" ||
        window.location.pathname === "/ohio/thank-you" ||
        window.location.pathname === "/personal/thank-you" ||
        window.location.pathname === "/student-loan/thank-you";
}

export function initialize3rdParty() {
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

                    ttq.load('CEHM5CBC77UDF9719OR0');
                    ttq.page();
                }(window, document, 'ttq');
            `);

            headEl.prepend(tikTokPixelScript);
        }

        // Add Facebook pixel script
        let facebookPixelScript: HTMLElement | null = document.getElementById("facebook-script");
        if (facebookPixelScript === null && !onThankYouPages()) {
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
                fbq('init', '1011657849590069');
                fbq('init', '5736031759798138');
                fbq('track', 'PageView');
            `);

            headEl.prepend(facebookPixelScript);
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
    }

    const bodyEl: HTMLBodyElement | null = document.querySelector("body");
    if (bodyEl !== null) {
        // Add Clickcease noscript
        let clickCeaseNoscript: HTMLElement | null = document.getElementById("click-cease-noscript");
        if (clickCeaseNoscript === null) {
            clickCeaseNoscript = document.createElement("noscript");
            clickCeaseNoscript.id = "click-cease-noscript";

            // const clickCeaseNoscriptLink = document.createElement("a");
            // clickCeaseNoscriptLink.href = "https://www.clickcease.com";
            // clickCeaseNoscriptLink.rel = "nofollow";

            // const clickCeaseNoscriptLinkImg = document.createElement("img");
            // clickCeaseNoscriptLinkImg.src = "https://monitor.clickcease.com/stats/stats.aspx";
            // clickCeaseNoscriptLinkImg.alt = "ClickCease";

            // clickCeaseNoscriptLink.append(clickCeaseNoscriptLinkImg);
            // clickCeaseNoscript.append(clickCeaseNoscriptLink);

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

            // const facebookPixelNoscript2Img = document.createElement("img");
            // facebookPixelNoscript2Img.height = 1;
            // facebookPixelNoscript2Img.width = 1;
            // facebookPixelNoscript2Img.style.display = "none";
            // facebookPixelNoscript2Img.style.visibility = "hidden";
            // facebookPixelNoscript2Img.alt = "Facebook Img"
            // facebookPixelNoscript2Img.src = "https://www.facebook.com/tr?id=5736031759798138&ev=PageView&noscript=1";

            // facebookPixelNoscript2.append(facebookPixelNoscript2Img);

            facebookPixelNoscript2.append(
                `<img height="1" width="1" style="display:none;visibility:hidden;" alt="Facebook Img"
                src="https://www.facebook.com/tr?id=5736031759798138&ev=PageView&noscript=1"/>`
            );
            bodyEl.prepend(facebookPixelNoscript2);
        }

        if (facebookPixelNoscript1 === null) {
            facebookPixelNoscript1 = document.createElement("noscript");
            facebookPixelNoscript1.id = "facebook-pixel-noscript-1";

            // const facebookPixelNoscript1Img = document.createElement("img");
            // facebookPixelNoscript1Img.height = 1;
            // facebookPixelNoscript1Img.width = 1;
            // facebookPixelNoscript1Img.style.display = "none";
            // facebookPixelNoscript1Img.style.visibility = "hidden";
            // facebookPixelNoscript1Img.alt = "Facebook Img"
            // facebookPixelNoscript1Img.src = "https://www.facebook.com/tr?id=1011657849590069&ev=PageView&noscript=1";

            // facebookPixelNoscript1.append(facebookPixelNoscript1Img);

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

            // const gtmNoscriptIFrame = document.createElement("iframe");
            // gtmNoscriptIFrame.src = "https://www.googletagmanager.com/ns.html?id=GTM-5ZWB77B";
            // gtmNoscriptIFrame.height = "0";
            // gtmNoscriptIFrame.width = "0";
            // gtmNoscriptIFrame.style.display = "none";
            // gtmNoscriptIFrame.style.visibility = "hidden";

            // gtmNoscript.append(gtmNoscriptIFrame);

            gtmNoscript.append(
                `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5ZWB77B" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
            );
            bodyEl.prepend(gtmNoscript);
        }
    }
}
