import { SHA256 } from "crypto-js";
import { fetchIPFromCloudflare } from "@utilities/requests";

(() => {
    const headEl: HTMLHeadElement | null = document.querySelector("head");
    if (headEl !== null) {
        let clickCeaseScript: HTMLElement | null = document.getElementById("clickcease");
        if (clickCeaseScript === null) {
            clickCeaseScript = document.createElement("script");
            clickCeaseScript.id = "clickcease";
            clickCeaseScript.append(`
                var script = document.createElement('script');
                script.async = true; script.type = 'text/javascript';
                var target = 'https://www.clickcease.com/monitor/stat.js';
                script.src = target;var elem = document.head;elem.appendChild(script);
            `);

            headEl.prepend(clickCeaseScript);
        }

        let tikTokPixelScript: HTMLElement | null = document.getElementById("tiktok-pixel");
        if (tikTokPixelScript === null) {
            tikTokPixelScript = document.createElement("script");
            tikTokPixelScript.id = "tiktok-pixel";
            tikTokPixelScript.append(`
                !function (w, d, t) {
                    w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++
                        )ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=i+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};

                    ttq.load("CEHM5CBC77UDF9719OR0");
                    ttq.page();
                    ttq.track("SubmitForm", {
                        value: ${Number(localStorage.getItem('amount')) || 0},
                        currency: "USD",
                        content_type: "product",
                        content_id: "1",
                        content_name: "stepper",
                    });
                }(window, document, "ttq");
            `);

            headEl.prepend(tikTokPixelScript);
        }

        let facebookPixelsScript: HTMLElement | null = document.getElementById("facebook-pixels");
        if (facebookPixelsScript === null) {
            facebookPixelsScript = document.createElement("script");
            facebookPixelsScript.id = "facebook-pixels";
            facebookPixelsScript.append(`
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
                fbq("trackSingleCustom", "1011657849590069", "ClickCeaseInvalidUsersLive", {
                    em: localStorage.getItem('email') !== null ? SHA256(localStorage.getItem('email') || "").toString() : "",
                    ph: localStorage.getItem('phone') !== null ? SHA256(localStorage.getItem('phone') || "").toString() : "",
                }, { eventID: "click_cease_invalid_users_live_${new Date().getTime() });

                fbq("trackSingle", "5736031759798138", "Lead", {
                    content_category: "product",
                    content_name: "stepper",
                    currency: "USD",
                    value: ${localStorage.getItem("amount") !== null ? Number(parseFloat(localStorage.getItem("amount") || "0").toFixed(2)) : 0.00},
                    em: localStorage.getItem('email') !== null ? SHA256(localStorage.getItem('email') || "").toString() : "",
                    ph: localStorage.getItem('phone') !== null ? SHA256(localStorage.getItem('phone') || "").toString() : "",
                    fn: localStorage.getItem('firstName') !== null ? SHA256(localStorage.getItem('firstName') || "").toString() : "",
                    ln: localStorage.getItem('lastName') !== null ? SHA256(localStorage.getItem('lastName') || "").toString() : "",
                    ct: localStorage.getItem('city') !== null ? SHA256(localStorage.getItem('city') || "").toString() : "",
                    st: localStorage.getItem('state') !== null ? SHA256(localStorage.getItem('state') || "").toString() : "",
                }, { eventID: "lead_${new Date().getTime() });
                fbq("trackSingleCustom", "5736031759798138", "ClickCeaseInvalidUsersLive", {
                    em: localStorage.getItem('email') !== null ? SHA256(localStorage.getItem('email') || "").toString() : "",
                    ph: localStorage.getItem('phone') !== null ? SHA256(localStorage.getItem('phone') || "").toString() : "",
                }, { eventID: "click_cease_invalid_users_live_${new Date().getTime() });

                fbq("track", "PageView");
            `);

            headEl.prepend(facebookPixelsScript);
        }

        let googleTagsCustomScript: HTMLElement | null = document.getElementById("google-tags-custom");
        if (googleTagsCustomScript === null) {
            googleTagsCustomScript = document.createElement("script");
            googleTagsCustomScript.id = "google-tags-custom";
            googleTagsCustomScript.append(`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config','AW-315822587', {'allow_enhanced_conversions':true});

                var enhanced_conversion_data = {
                    email: localStorage.getItem("email"),
                    phone: localStorage.getItem("phone"),
                    firstName: localStorage.getItem("firstName"),
                    lastName: localStorage.getItem("lastName"),
                    city: localStorage.getItem("city"),
                    state: localStorage.getItem("state"),
                };

                gtag("event", "conversion", {
                    send_to: "AW-315822587/eO1NCPPzzPQCEPujzJYB",
                    value: ${Number(localStorage.getItem("amount") || 0)},
                    currency: "USD",
                });
            `);

            headEl.prepend(googleTagsCustomScript);
        }

        let googleTagsScript: HTMLElement | null = document.getElementById("google-tags");
        if (googleTagsScript === null) {
            googleTagsScript = document.createElement("script");
            googleTagsScript.id = "google-tags";
            (googleTagsScript as HTMLScriptElement).async = true;
            (googleTagsScript as HTMLScriptElement).src = "https://www.googletagmanager.com/gtag/js?id=AW-315822587";

            headEl.prepend(googleTagsScript);
        }

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
})();

export async function executeThankYouEvents() {
    const email = localStorage.getItem("email") || "";
    const phone = localStorage.getItem("phone") || "";
    const firstName = localStorage.getItem("firstName") || "";
    const lastName = localStorage.getItem("lastName") || "";
    const city = localStorage.getItem("city") || "";
    const state = localStorage.getItem("state") || "";
    const uuid = localStorage.getItem("uuid") || "";
    const amountString = localStorage.getItem("amount") || "0";
    const amountNumber = Number(amountString);

    const clientIPAddress = await fetchIPFromCloudflare();
    const { userAgent } = navigator;

    const hashedEmail = SHA256(email).toString();
    const hashedPhone = SHA256(phone).toString();
    const hashedFirstName = SHA256(firstName).toString();
    const hashedLastName = SHA256(lastName).toString();
    const hashedCity = SHA256(city).toString();
    const hashedState = SHA256(state).toString();

    (window as any).ttq.track("SubmitForm", {
        value: amountNumber,
        currency: "USD",
        content_type: "product",
        content_id: "1",
        content_name: "stepper",
    });

    (window as any).dataLayer.push({
        email: hashedEmail,
        phone_number: hashedPhone,
        first_name: hashedFirstName,
        last_name: hashedLastName,
        city: hashedCity,
        state: hashedState,
        user_agent: navigator.userAgent,
        ip_address: clientIPAddress,
    });

    (window as any).gtag("event", "conversion", {
        send_to: "AW-315822587/eO1NCPPzzPQCEPujzJYB",
        value: amountNumber,
        currency: "USD",
    });

    (window as any).fbq("trackSingle", "1011657849590069", "SubmitApplication");
    (window as any).fbq("trackSingleCustom", "1011657849590069", "ClickCeaseInvalidUsersLive", {
        em: hashedEmail,
        ph: hashedPhone,
        client_user_agent: userAgent,
        client_ip_address: clientIPAddress,
    }, { eventID: `click_cease_invalid_users_live_${uuid || new Date().getTime()}` });

    (window as any).fbq("trackSingle", "5736031759798138", "Lead", {
        content_category: "product",
        content_name: "stepper",
        currency: "USD",
        client_user_agent: userAgent,
        client_ip_address: clientIPAddress,
        value: amountNumber.toFixed(2),
        em: hashedEmail,
        ph: hashedPhone,
        fn: hashedFirstName,
        ln: hashedLastName,
        ct: hashedCity,
        st: hashedState,
    }, { eventID: `lead_${uuid || new Date().getTime()}` });
    (window as any).fbq("trackSingleCustom", "5736031759798138", "ClickCeaseInvalidUsersLive", {
        em: hashedEmail,
        ph: hashedPhone,
        client_user_agent: userAgent,
        client_ip_address: clientIPAddress,
    }, { eventID: `click_cease_invalid_users_live_${uuid || new Date().getTime()}` });
}
