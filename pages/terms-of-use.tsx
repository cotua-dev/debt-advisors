import { TermsOfUse as TermsOfUseContent } from '../components/TermsOfUse';
import { Layout } from '../components/Layout';
import { PageProps } from '../shared/interfaces';

export async function getStaticProps(): Promise<PageProps> {
    return { props: {}, revalidate: 60 };
}

function TermsOfUse(): JSX.Element {
    return (
        <Layout title="Terms Of Use – Debt Advisors">
            <TermsOfUseContent/>
        </Layout>
    );
}

export default TermsOfUse;
