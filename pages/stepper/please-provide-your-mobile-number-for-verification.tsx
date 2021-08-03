import { Header } from '../../components/Header';

interface PleaseProvideYourMobileNumberForVerificationStaticProps {
    props: {};
    revalidate: number;
};

export async function getStaticProps(): Promise<PleaseProvideYourMobileNumberForVerificationStaticProps> {
    return { props: {}, revalidate: 60 };
}

function PleaseProvideYourMobileNumberForVerification(): JSX.Element {
    return (
        <>
            <Header title="Stepper - Debt Advisors"/>
            <main>
                <h1>Please Provide Your Mobile Number For Verification</h1>
            </main>
        </>
    );
}

export default PleaseProvideYourMobileNumberForVerification;
