import { PrivacyPolicy as PrivacyPolicyContent } from '../components/PrivacyPolicy';
import { Layout } from '../components/Layout';

function PrivacyPolicy(): JSX.Element {
    return (
        <Layout title="Privacy Policy – Debt Advisors">
            <PrivacyPolicyContent/>
        </Layout>
    );
}

export default PrivacyPolicy;
