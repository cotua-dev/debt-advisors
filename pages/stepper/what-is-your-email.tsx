import { Header } from '../../components/Header';

interface WhatIsYourEmailStaticProps {
    props: {};
    revalidate: number;
};

export async function getStaticProps(): Promise<WhatIsYourEmailStaticProps> {
    return { props: {}, revalidate: 60 };
}

function WhatIsYourEmail(): JSX.Element {
    return (
        <>
            <Header title="Stepper - Debt Advisors"/>
            <main>
                <h1>What Is Your Email</h1>
            </main>
        </>
    );
}

export default WhatIsYourEmail;
