import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';

interface DebtCalculatorStaticProps {
    props: {};
    revalidate: number;
};

export async function getStaticProps(): Promise<DebtCalculatorStaticProps> {
    return { props: {}, revalidate: 60 };
}

function DebtCalculator(): JSX.Element {
    return (
        <>
            <Header title="Debt Calculator – Debt Advisors"/>
            <Navigation/>
            <main>
                <h1>Debt Calculator</h1>
            </main>
            <Footer/>
        </>
    );
}

export default DebtCalculator;
