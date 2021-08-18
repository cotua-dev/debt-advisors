import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    public render(): JSX.Element {
        return (
            <Html lang="en">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"/>
                    <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-5ZWB77B');`}}></script>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5ZWB77B" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
