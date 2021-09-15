import { Stepper } from '../components/Stepper';
import { Layout } from '../components/Layout';

interface StepperPageProps {
    props: {},
    revalidate: number;
};

export async function getStaticProps(): Promise<StepperPageProps> {
    return { props: {}, revalidate: 60 };
}

function StepperPage(): JSX.Element {
    return (
        <Layout title="Stepper - Debt Advisors">
            <Stepper/>
        </Layout>
    );
}

export default StepperPage;
