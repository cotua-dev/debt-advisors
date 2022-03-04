import { MailerCheck } from '../components/MailerCheck';
import { Layout } from '../components/Layout';
import { PageProps } from '../shared/interfaces';

export async function getStaticProps(): Promise<PageProps> {
    return { props: {}, revalidate: 60 };
}

function HelpPage(): JSX.Element {
    return (
        <Layout title="Help - Debt Advisors">
            <MailerCheck/>
        </Layout>
    );
}

export default HelpPage;
