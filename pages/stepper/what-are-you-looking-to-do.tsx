import { Header } from '../../components/Header';

interface WhatAreYouLookingToDoStaticProps {
    props: {};
    revalidate: number;
};

export async function getStaticProps(): Promise<WhatAreYouLookingToDoStaticProps> {
    return { props: {}, revalidate: 60 };
}

function WhatAreYouLookingToDo(): JSX.Element {
    return (
        <>
            <Header title="Stepper - Debt Advisors"/>
            <main>
                <h1>What Are You Looking To Do</h1>
            </main>
        </>
    );
}

export default WhatAreYouLookingToDo;
