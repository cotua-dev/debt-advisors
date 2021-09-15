import { PrivacyPolicy as PrivacyPolicyContent } from '../components/PrivacyPolicy';
import { Layout } from '../components/Layout';

interface PrivacyPolicyStaticProps {
    props: {};
    revalidate: number;
};

export async function getStaticProps(): Promise<PrivacyPolicyStaticProps> {
    return { props: {}, revalidate: 60 };
}

function PrivacyPolicy(): JSX.Element {
    return (
        <Layout title="Privacy Policy – Debt Advisors">
            <PrivacyPolicyContent/>
        </Layout>
    );
}

export default PrivacyPolicy;
