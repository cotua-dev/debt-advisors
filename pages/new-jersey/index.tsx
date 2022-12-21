import { Stepper } from '../../components/Stepper';
import { Layout } from '../../components/Layout';

function NewJerseyPage(): JSX.Element {
    return (
        <Layout title="New Jersey - Debt Advisors">
            <Stepper stepper-type="full"/>
        </Layout>
    );
}

export default NewJerseyPage;
