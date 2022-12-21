import { Stepper } from '../components/Stepper';
import { Layout } from '../components/Layout';

function StepperPage(): JSX.Element {
    return (
        <Layout title="Stepper - Debt Advisors">
            <Stepper stepper-type="full"/>
        </Layout>
    );
}

export default StepperPage;
