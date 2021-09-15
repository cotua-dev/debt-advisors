import { Footer } from '../Footer';
import { Header } from '../Header';
import { Navigation } from '../Navigation';
import { LayoutProps } from './Layout.interfaces';

export function Layout(props: LayoutProps = { title: 'Debt Advisors', children: [] }): JSX.Element {
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
