import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';
import { Jumbotron } from '../components/debt-calculator/Jumbotron';
import { Calculator } from '../components/debt-calculator/Calculator';

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
                <Jumbotron/>
                <Calculator/>
            </main>
            <Footer/>
        </>
    );
}

export default DebtCalculator;
