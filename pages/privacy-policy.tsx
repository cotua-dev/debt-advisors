import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';
import { PrivacyPolicy as PrivacyPolicyContent } from '../components/PrivacyPolicy';

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
                <PrivacyPolicyContent/>
            </main>
            <Footer/>
        </>
    );
}

export default PrivacyPolicy;
