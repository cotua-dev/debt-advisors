import { useEffect, useState } from 'react';
import Script from 'next/script';
import { SHA256 } from 'crypto-js';
import { ThankYouLayoutProps } from './ThankYouLayout.interfaces';
import { insertTrackingScripts } from './ThankYouLayout.utilities';
import * as fbPixel from "../../shared/facebookPixel";
import * as googleConversions from "../../shared/googleConversions";
import * as tikTokPixel from "../../shared/tikTokPixel";

export function ThankYouLayout({ children }: ThankYouLayoutProps): JSX.Element {
    const parsePhoneNumber = (phone: string): string => {
        let parsedPhoneNumber = '';

        // Remove whitespace and '+'
        parsedPhoneNumber = phone.split(' ').join('').replace('+', '');

        return parsedPhoneNumber;
    }

    /**
     * We needed to pass the unsecured debt amount to the google tag conversion script
     * so we could validate the value of each lead. I found that setting the passed
     * debt amount in `localStorage` and then creating the script tag in `useEffect` to be
     * the easiest method. This works because we force a refresh after the stepper finishes
     * due to setting `window.location.href` instead of utilizing NextJS's `router.push`.
     * Feel free to try other methods if a better one is found.
     */
    /*
    useEffect(() => {
        const bodyEl: HTMLBodyElement | null = document.querySelector('body');

        // Grab data from localStorage
        const amount: string | null = localStorage.getItem('amount');
        const email: string | null = localStorage.getItem('email');
        const phone: string | null = localStorage.getItem('phone');
        const firstName: string | null = localStorage.getItem('firstName');
        const lastName: string | null = localStorage.getItem('lastName');
        const city: string | null = localStorage.getItem('city');
        const state: string | null = localStorage.getItem('state');

        // UTM values
        const utm_source: string | null = localStorage.getItem('utm_source');
        const utm_medium: string | null = localStorage.getItem('utm_medium');
        const utm_campaign: string | null = localStorage.getItem('utm_campaign');
        const utm_term: string | null = localStorage.getItem('utm_term');
        const utm_content: string | null = localStorage.getItem('utm_content');
    }, []);
    */

    /*
    useEffect(() => {
        fbPixel.singleEvent("SubmitApplication", "1011657849590069");
        fbPixel.singleCustomEvent("ClickCeaseInvalidUsersLive", "1011657849590069");
        fbPixel.singleEvent("Lead", "5736031759798138");
        fbPixel.singleCustomEvent("ClickCeaseInvalidUsersLive", "5736031759798138");

        googleConversions.conversion(localStorage.getItem("amount"));

        tikTokPixel.submitForm(localStorage.getItem("amount"));
    }, []);
    */

    // useEffect(() => {
    //     insertTrackingScripts();
    // }, []);

    return (
        <>
            {/* <Script
                id="google-tag-data"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{__html: `
                    const enhanced_conversion_data = {
                        "email": ${localStorage.getItem('email') || ''},
                    }
                `}}
            ></Script> */}
            {/* <Script
                strategy="afterInteractive"
                id="google-tag-enhanced-data"
                dangerouslySetInnerHTML={{__html: `
                    var enhanced_conversion_data = {
                        "email": ${SHA256(localStorage.getItem('email') || '')}
                    };
                `}}
            />
            <Script
                strategy="afterInteractive"
                id="google-tag-conversion"
                dangerouslySetInnerHTML={{__html: `
                    gtag('event', 'conversion', {
                        'send_to': '${process.env.NEXT_PUBLIC_GTAG}/${process.env.NEXT_PUBLIC_GTM_THANK_YOU}'
                    });
                `}}
            /> */}
            {/* <Script
                strategy="afterInteractive"
                id="google-tag-conversion"
                dangerouslySetInnerHTML={{__html: `
                    gtag('event', 'conversion', {
                        'send_to': '${process.env.NEXT_PUBLIC_GTAG}/${process.env.NEXT_PUBLIC_GTM_THANK_YOU}',
                        'value': ${conversionValue},
                        'currency': 'USD'
                    });
                `}}
            /> */}
            <Script
                id="tik-tok-track-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{__html: `
                    ttq.instance("CEHM5CBC77UDF9719OR0");
                    ttq.track("SubmitForm", {
                        value: 0,
                        currency: "USD",
                        content_type: "product",
                        content_id: "1",
                        content_name: "stepper",
                    });
                `}}
            ></Script>
            <Script
                id="google-tag-conversion"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{__html: `
                    gtag("event", "conversion", {
                        send_to: "AW-315822587/eO1NCPPzzPQCEPujzJYB",
                        value: 0,
                        currency: "USD",
                    });
                `}}
            ></Script>
            <Script
                strategy="afterInteractive"
                id="facebook-track-submit-application"
                dangerouslySetInnerHTML={{__html: `
                    fbq('track', 'SubmitApplication');
                    fbq('track', 'Lead');
                `}}
            />
            {/* <Script
                strategy="afterInteractive"
                id="facebook-track-submit-application"
                dangerouslySetInnerHTML={{__html: `
                    fbq('track', 'SubmitApplication');
                    fbq('track', 'Lead', {
                        em: '',
                        ph: '',
                        fn: '',
                        ln: '',
                    });
                `}}
            /> */}
            {children}
        </>
    );
}
