import Head from 'next/head';
import { HeaderProps } from './Header.interfaces';

export function Header(props: HeaderProps) {
    const description = "Debt Advisors of America helps individuals across the U.S. by 1) gathering personal information to determine a consolidation plan that will best fit your needs. Our service is a form of debt consolidation without a loan. 2) Our customized evaluations aim to help you reduce what you owe, avoid filing for bankruptcy, and finally overcome overwhelming debt.";

    return (
        <Head>
            <title>{props.title ? props.title : 'Debt Advisors – America'}</title>
            <meta charSet="utf-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="theme-color" content="#2B2F73"/>
            <meta name="description" content={props.description ? props.description : description}/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/images/logo32x32.png"/>
            <link rel="icon" type="image/png" sizes="180x180" href="/images/logo180x180.png"/>
            <link rel="apple-touch-icon" href="/images/logo192x192.png"/>
            <link rel="manifest" href="/manifest.json"/>
        </Head>
    );
};
