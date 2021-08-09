import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';

interface PrivacyPolicyStaticProps {
    props: {};
    revalidate: number;
};

export async function getStaticProps(): Promise<PrivacyPolicyStaticProps> {
    return { props: {}, revalidate: 60 };
}

function PrivacyPolicy(): JSX.Element {
    return (
        <>
            <Header title="Privacy Policy – Debt Advisors"/>
            <Navigation/>
            <main>
                <h1>Privacy Policy</h1>
            </main>
            <Footer/>
        </>
    );
}

export default PrivacyPolicy;
