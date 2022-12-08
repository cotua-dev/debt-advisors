import { useEffect } from 'react';
import { SHA256 } from 'crypto-js';
import { ThankYouLayoutProps } from './ThankYouLayout.interfaces';

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

        // Make sure we have the body element
        if (bodyEl !== null) {
            // Only add the conversion script if we have an amount in localStorage
            if (amount !== null) {
                let conversionScript: HTMLElement | null = document.getElementById('google-tag-conversion');

                if (conversionScript === null) {
                    conversionScript = document.createElement('script');
                    conversionScript.id = 'google-tag-conversion';
                    conversionScript.append(`
                        gtag('event', 'conversion', {
                            'send_to': '${process.env.NEXT_PUBLIC_GTAG}/${process.env.NEXT_PUBLIC_GTM_THANK_YOU}',
                            'value': ${Number(amount)},
                            'currency': 'USD'
                        });
                    `);

                    bodyEl.append(conversionScript);
                }
            }

            // Only add the pixel script if we have its lead data in localStorage
            if (
                email !== null &&
                phone !== null &&
                firstName !== null &&
                lastName !== null &&
                city !== null &&
                state !== null
            ) {
                // let pixelScript: HTMLElement | null = document.getElementById('facebook-track-submit-application');

                const parsedPhoneNumber: string = parsePhoneNumber(phone);

                const emailHash = SHA256(email);
                const phoneHash = SHA256(parsedPhoneNumber);
                const firstNameHash = SHA256(firstName);
                const lastNameHash = SHA256(lastName);
                const cityHash = SHA256(city);
                const stateHash = SHA256(state);
                const countryHash = SHA256("us");

                // Send data off to Facebook
                (window as any).fbq('track', 'Lead', {
                    em: emailHash.toString(),
                    ph: phoneHash.toString(),
                    fn: firstNameHash.toString(),
                    ln: lastNameHash.toString(),
                    ct: cityHash.toString(),
                    st: stateHash.toString(),
                    country: countryHash.toString(),
                }, { eventID: `lead_${new Date().getTime()}` });
                (window as any).fbq('track', 'ClickCeaseInvalidUsersLive', {
                    em: emailHash.toString(),
                    ph: phoneHash.toString(),
                    fn: firstNameHash.toString(),
                    ln: lastNameHash.toString(),
                    ct: cityHash.toString(),
                    st: stateHash.toString(),
                    country: countryHash.toString(),
                }, { eventID: `click_cease_${new Date().getTime()}` });

                // if (pixelScript !== null) {
                //     pixelScript = document.createElement('script');
                //     pixelScript.id = 'facebook-track-submit-application';
                //     pixelScript.append(`
                //         fbq('track', 'SubmitApplication');
                //         fbq('track', 'Lead', {
                //             em: '${emailHash.toString()}',
                //             ph: '${phoneHash.toString()}',
                //             fn: '${firstNameHash.toString()}',
                //             ln: '${lastNameHash.toString()}',
                //         });
                //     `);
                // }

                // Send data off to Google
                (window as any).dataLayer.push({
                    email: emailHash.toString(),
                    phone_number: phoneHash.toString(),
                    first_name: firstNameHash.toString(),
                    last_name: lastNameHash.toString(),
                });
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
