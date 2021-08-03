import { Header } from '../../components/Header';

interface WhatCityAreYouInStaticProps {
    props: {};
    revalidate: number;
};

export async function getStaticProps(): Promise<WhatCityAreYouInStaticProps> {
    return { props: {}, revalidate: 60 };
}

function WhatCityAreYouIn(): JSX.Element {
    return (
        <>
            <Header title="Stepper - Debt Advisors"/>
            <main>
                <h1>What City Are You In</h1>
            </main>
        </>
    );
}

export default WhatCityAreYouIn;
