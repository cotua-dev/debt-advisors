import { Header } from '../../components/Header';

interface WhatIsYourTotalAmountOfUnsecuredDebtStaticProps {
    props: {};
    revalidate: number;
};

export async function getStaticProps(): Promise<WhatIsYourTotalAmountOfUnsecuredDebtStaticProps> {
    return { props: {}, revalidate: 60 };
}

function WhatIsYourTotalAmountOfUnsecuredDebt(): JSX.Element {
    return (
        <>
            <Header title="Stepper - Debt Advisors"/>
            <main>
                <h1>What Is Your Total Amount Of Unsecured Debt</h1>
            </main>
        </>
    );
}

export default WhatIsYourTotalAmountOfUnsecuredDebt;
