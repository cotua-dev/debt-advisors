// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Navigation } from '../Navigation';
import { LayoutProps } from './Layout.interfaces';

export function Layout(props: LayoutProps = { title: 'Debt Advisors', children: [] }): JSX.Element {
    // const router = useRouter();
    // const { query } = router;

    // useEffect(() => {
    //     localStorage.clear();

    //     if (query.gclid !== undefined) {
    //         localStorage.setItem("gclid", query.gclid as string);

    //         const gclidField: Element | null = document.querySelector("#gclid_field");
    //         if (gclidField !== null) {
    //             (gclidField as HTMLInputElement).value = query.gclid as string;
    //         }
    //     }

    //     if (query.fbclid !== undefined) {
    //         localStorage.setItem("fbclid", query.fbclid as string);
    //     }

    //     if (query.Placement !== undefined) {
    //         localStorage.setItem("placement", query.Placement as string);
    //     }

    //     if (query.utm_campaign !== undefined) {
    //         localStorage.setItem("utm_campaign", query.utm_campaign as string);
    //     }

    //     if (query.utm_content !== undefined) {
    //         localStorage.setItem("utm_content", query.utm_content as string);
    //     }

    //     if (query.utm_medium !== undefined) {
    //         localStorage.setItem("utm_medium", query.utm_medium as string);
    //     }

    //     if (query.utm_source !== undefined) {
    //         localStorage.setItem("utm_source", query.utm_source as string);
    //     }

    //     if (query.utm_term !== undefined) {
    //         localStorage.setItem("utm_term", query.utm_term as string);
    //     }
    // }, [query]);

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
