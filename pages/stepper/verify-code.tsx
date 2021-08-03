import { Header } from '../../components/Header';

interface VerifyCodeStaticProps {
    props: {};
    revalidate: number;
};

export async function getStaticProps(): Promise<VerifyCodeStaticProps> {
    return { props: {}, revalidate: 60 };
}

function VerifyCode(): JSX.Element {
    return (
        <>
            <Header title="Stepper - Debt Advisors"/>
            <main>
                <h1>Verify Code</h1>
            </main>
        </>
    );
}

export default VerifyCode;
