import { useEffect } from 'react';
import { addGclid } from '../../shared/utilities';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Navigation } from '../Navigation';
import { LayoutProps } from './Layout.interfaces';

export function Layout(props: LayoutProps = { title: 'Debt Advisors', children: [] }): JSX.Element {
    useEffect(() => {
        addGclid();
    }, []);

    return (
        <>
            <Header title={props.title}/>
            <Navigation/>
            <main role="main">
                {props.children}
            </main>
            <Footer/>
        </>
    );
}
