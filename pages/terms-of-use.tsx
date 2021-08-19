import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';
import { TermsOfUse as TermsOfUseContent } from '../components/TermsOfUse';

interface TermsOfUseStaticProps {
    props: {};
    revalidate: number;
};

export async function getStaticProps(): Promise<TermsOfUseStaticProps> {
    return { props: {}, revalidate: 60 };
}

function TermsOfUse(): JSX.Element {
    return (
        <>
            <Header title="Terms Of Use – Debt Advisors"/>
            <Navigation/>
            <main>
                <TermsOfUseContent/>
            </main>
            <Footer/>
        </>
    );
}

export default TermsOfUse;
