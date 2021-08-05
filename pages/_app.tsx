import { AppContext, AppInitialProps } from 'next/app';
import '../styles/globals.scss';

const CustomApp = ({ Component, pageProps }: AppContext & AppInitialProps): JSX.Element => (
    <>
        <Component {...pageProps}/>
    </>
);

export default CustomApp;
