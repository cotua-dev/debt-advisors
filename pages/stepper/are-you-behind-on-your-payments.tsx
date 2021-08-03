import { Header } from '../../components/Header';

interface AreYouBehindOnYourPaymentsStaticProps {
    props: {};
    revalidate: number;
};

export async function getStaticProps(): Promise<AreYouBehindOnYourPaymentsStaticProps> {
    return { props: {}, revalidate: 60 };
}

function AreYouBehindOnYourPayments(): JSX.Element {
    return (
        <>
            <Header title="Stepper - Debt Advisors"/>
            <main>
                <h1>Are You Behind On Your Payments</h1>
            </main>
        </>
    );
}

export default AreYouBehindOnYourPayments;
