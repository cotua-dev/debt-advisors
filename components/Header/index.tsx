import Head from 'next/head';
import { HeaderProps } from './Header.interfaces';

export function Header(props: HeaderProps) {
    const description = "Debt Advisors of America helps individuals across the U.S. by 1) gathering personal information to determine a consolidation plan that will best fit your needs. Our service is a form of debt consolidation without a loan. 2) Our customized evaluations aim to help you reduce what you owe, avoid filing for bankruptcy, and finally overcome overwhelming debt.";

    return (
        <Head>
            <title>{props.title ? props.title : 'Debt Advisors - America'}</title>
            <meta charSet="utf-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="theme-color" content="#2B2F73"/>
            <meta name="description" content={props.description ? props.description : description}/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta property="og:type" content="website"/>
            <meta property="og:locale" content="en_US"/>
            <meta property="og:site_name" content={props.title || "Debt Advisors - America"}/>
            <meta property="og:title" content={props.title || "Debt Advisors - America"}/>
            <meta property="og:description" content={props.description || description}/>
            <meta name="trustpilot-one-time-domain-verification-id" content="7a0c412b-dddc-4691-b431-f13f97ee89d6"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/images/logo32x32.png"/>
            <link rel="icon" type="image/png" sizes="180x180" href="/images/logo180x180.png"/>
            <link rel="apple-touch-icon" href="/images/logo192x192.png"/>
            <link rel="manifest" href="/manifest.json"/>
            <script type="text/javascript" src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>
        </Head>
    );
};
