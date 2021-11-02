import { PrivacyPolicy as PrivacyPolicyContent } from '../components/PrivacyPolicy';
import { Layout } from '../components/Layout';
import { PageProps } from '../shared/interfaces';

export async function getStaticProps(): Promise<PageProps> {
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
