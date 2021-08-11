import { Header } from '../../components/Header';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { Stepper } from '../../components/Stepper';

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
            <Navigation/>
            <main>
                <Stepper/>
            </main>
            <Footer/>
        </>
    );
}

export default WhatKindOfDebtsDoYouHave;
