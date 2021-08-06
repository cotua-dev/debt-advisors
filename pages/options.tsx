import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';

interface OptionsStaticProps {
    props: {};
    revalidate: number;
};

export async function getStaticProps(): Promise<OptionsStaticProps> {
    return { props: {}, revalidate: 60 };
}

function Options(): JSX.Element {
    return (
        <>
            <Header title="Options - Debt Advisors"/>
            <Navigation/>
            <main>
                <h1>Options</h1>
            </main>
            <Footer/>
        </>
    );
}

export default Options;
