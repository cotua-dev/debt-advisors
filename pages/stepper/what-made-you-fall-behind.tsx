import { Header } from '../../components/Header';

interface WhatMadeYouFallBehindStaticProps {
    props: {};
    revalidate: number;
};

export async function getStaticProps(): Promise<WhatMadeYouFallBehindStaticProps> {
    return { props: {}, revalidate: 60 };
}

function WhatMadeYouFallBehind(): JSX.Element {
    return (
        <>
            <Header title="Stepper - Debt Advisors"/>
            <main>
                <h1>What Made You Fall Behind</h1>
            </main>
        </>
    );
}

export default WhatMadeYouFallBehind;
