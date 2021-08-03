import { Header } from '../../components/Header';

interface WhatKindOfDebtsDoYouHaveStaticProps {
    props: {};
    revalidate: number;
};

export async function getStaticProps(): Promise<WhatKindOfDebtsDoYouHaveStaticProps> {
    return { props: {}, revalidate: 60 };
}

function WhatKindOfDebtsDoYouHave(): JSX.Element {
    return (
        <>
            <Header title="Stepper - Debt Advisors"/>
            <main>
                <h1>What Kind Of Debts Do You Have</h1>
            </main>
        </>
    );
}

export default WhatKindOfDebtsDoYouHave;
