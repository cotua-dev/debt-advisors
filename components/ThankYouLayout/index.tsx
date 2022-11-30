import { useEffect } from 'react';
import Script from 'next/script';
import { ThankYouLayoutProps } from './ThankYouLayout.interfaces';

export function ThankYouLayout({ children }: ThankYouLayoutProps): JSX.Element {
    /**
     * We needed to pass the unsecured debt amount to the google tag conversion script
     * so we could validate the value of each lead. I found that setting the passed
     * debt amount in `localStorage` and then creating the script tag in `useEffect` to be
     * the easiest method. This works because we force a refresh after the stepper finishes
     * due to setting `window.location.href` instead of utilizing NextJS's `router.push`.
     * Feel free to try other methods if a better one is found.
     */
    useEffect(() => {
        const localStorageAmount: string | null = localStorage.getItem('amount');
        if (localStorageAmount !== null) {
            const bodyEl: HTMLBodyElement | null = document.querySelector('body');
            let conversionScript: HTMLElement | null = document.getElementById('google-tag-conversion');

            if (conversionScript === null) {
                conversionScript = document.createElement('script');
                conversionScript.id = 'google-tag-conversion';
                conversionScript.append(`
                    gtag('event', 'conversion', {
                        'send_to': '${process.env.NEXT_PUBLIC_GTAG}/${process.env.NEXT_PUBLIC_GTM_THANK_YOU}',
                        'value': ${Number(localStorageAmount)},
                        'currency': 'USD'
                    });
                `);

                if (bodyEl !== null) {
                    bodyEl.append(conversionScript);
                }
            }
        }
    });

    return (
        <>
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
                strategy="afterInteractive"
                id="facebook-track-submit-application"
                dangerouslySetInnerHTML={{__html: `
                    fbq('track', 'SubmitApplication');
                    fbq('track', 'Lead');
                `}}
            />
            {children}
        </>
    );
}
