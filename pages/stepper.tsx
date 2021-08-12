import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Stepper } from '../components/Stepper';

interface StepperPageProps {
    props: {},
    revalidate: number;
};

export async function getStaticProps(): Promise<StepperPageProps> {
    return { props: {}, revalidate: 60 };
}

function StepperPage(): JSX.Element {
    return (
        <>
            <Header title="Stepper - Debt Advisors"/>
            <Navigation/>
            <main>
                <Stepper/>
            </main>
            <Footer/>
        </>
    );
}

export default StepperPage;
