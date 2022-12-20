import { Stepper } from '../../components/Stepper';
import { PageProps } from '../../shared/interfaces';
import { Layout } from '../../components/Layout';

export async function getStaticProps(): Promise<PageProps> {
    return { props: {}, revalidate: 60 };
}

function DebtPage(): JSX.Element {
    return (
        <Layout title="Debt - Debt Advisors">
            <Stepper stepper-type="full"/>
        </Layout>
    );
}

export default DebtPage;
