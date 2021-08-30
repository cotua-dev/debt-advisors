import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';
import { Jumbotron } from '../components/options/Jumbotron';
import { Scenarios } from '../components/options/Scenarios';

export interface OptionsStaticProps {
    props: {};
    revalidate: number;
};

export async function getStaticProps(): Promise<OptionsStaticProps> {
    return { props: {}, revalidate: 1 };
}

function Options(): JSX.Element {
    return (
        <>
            <Header title="Options – Debt Advisors"/>
            <Navigation/>
            <main>
                <Jumbotron/>
                <Scenarios/>
            </main>
            <Footer/>
        </>
    );
}

export default Options;
