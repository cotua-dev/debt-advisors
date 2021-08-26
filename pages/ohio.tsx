import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Stepper } from '../components/Stepper';

interface OhioPageProps {
    props: {},
    revalidate: number;
};

export async function getStaticProps(): Promise<OhioPageProps> {
    return { props: {}, revalidate: 60 };
}

function OhioPage(): JSX.Element {
    return (
        <>
            <Header title="Ohio - Debt Advisors"/>
            <Navigation/>
            <main>
                <Stepper/>
            </main>
            <Footer/>
        </>
    );
}

export default OhioPage;
