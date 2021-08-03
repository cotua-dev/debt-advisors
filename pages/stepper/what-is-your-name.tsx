import { Header } from '../../components/Header';

interface WhatIsYourNameStaticProps {
    props: {};
    revalidate: number;
};

export async function getStaticProps(): Promise<WhatIsYourNameStaticProps> {
    return { props: {}, revalidate: 60 };
}

function WhatIsYourName(): JSX.Element {
    return (
        <>
            <Header title="Stepper - Debt Advisors"/>
            <main>
                <h1>What Is Your Name</h1>
            </main>
        </>
    );
}

export default WhatIsYourName;
