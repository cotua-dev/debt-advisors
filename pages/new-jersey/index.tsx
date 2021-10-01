import { Header } from '../../components/Header';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { Stepper } from '../../components/Stepper';

interface NewJerseyPageProps {
    props: {},
    revalidate: number;
};

export async function getStaticProps(): Promise<NewJerseyPageProps> {
    return { props: {}, revalidate: 60 };
}

function NewJerseyPage(): JSX.Element {
    return (
        <>
            <Header title="New Jersey - Debt Advisors"/>
            <Navigation/>
            <main>
                <Stepper/>
            </main>
            <Footer/>
        </>
    );
}

export default NewJerseyPage;
