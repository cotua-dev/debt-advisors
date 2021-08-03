import { Header } from '../../components/Header';

interface WhatIsYourMonthlyIncomeStaticProps {
    props: {};
    revalidate: number;
};

export async function getStaticProps(): Promise<WhatIsYourMonthlyIncomeStaticProps> {
    return { props: {}, revalidate: 60 };
}

function WhatIsYourMonthlyIncome(): JSX.Element {
    return (
        <>
            <Header title="Stepper - Debt Advisors"/>
            <main>
                <h1>What Is Your Monthly Income</h1>
            </main>
        </>
    );
}

export default WhatIsYourMonthlyIncome;
