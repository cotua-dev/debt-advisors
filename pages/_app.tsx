import { AppContext, AppInitialProps } from 'next/app';
import '../styles/globals.scss';

const CustomApp = ({ Component, pageProps }: AppContext & AppInitialProps): JSX.Element => {
    return (
        <>
            <Component {...pageProps}/>
            {/* <input type="hidden" id="gclid_field" name="gclid_field" value=""/> */}
        </>
    );
};

export default CustomApp;
