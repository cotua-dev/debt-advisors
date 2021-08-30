import { NextComponentType, NextPageContext } from 'next';
import { AppProps } from 'next/app';
import MyApp from '../pages/_app';
import Home from '../pages/index';

describe('App Component', (): void => {
    let nextComponent: NextComponentType<NextPageContext, any, {}> = Home;
    const appProps: AppProps = {
        Component: nextComponent,
        pageProps: {},
        router: null,
    };
    const app: JSX.Element = MyApp(appProps);

    it('renders', (): void => {
        expect(app).toBeTruthy();
    });
});
