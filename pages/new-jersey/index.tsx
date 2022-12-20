import { Stepper } from '../../components/Stepper';
import { PageProps } from '../../shared/interfaces';
import { Layout } from '../../components/Layout';

export async function getStaticProps(): Promise<PageProps> {
    return { props: {}, revalidate: 60 };
}

function NewJerseyPage(): JSX.Element {
    return (
        <Layout title="New Jersey - Debt Advisors">
            <Stepper stepper-type="full"/>
        </Layout>
    );
}

export default NewJerseyPage;
