import { useState } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { ThankYouLayoutProps } from './ThankYouLayout.interfaces';

export function ThankYouLayout({ children }: ThankYouLayoutProps): JSX.Element {
    const router = useRouter();
    const [conversionValue] = useState(router.pathname === '/thank-you' ? 100 : 10);

    return (
        <>
            <Script
                strategy="afterInteractive"
                id="google-tag-conversion"
                dangerouslySetInnerHTML={{__html: `
                    gtag('event', 'conversion', {
                        'send_to': '${process.env.NEXT_PUBLIC_GTAG}/${process.env.NEXT_PUBLIC_GTM_THANK_YOU}',
                        'value': ${conversionValue},
                        'currency': 'USD'
                    });
                `}}
            />
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
