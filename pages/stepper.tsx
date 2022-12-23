import { Stepper } from '../components/Stepper';
import { Layout } from '../components/Layout';

function StepperPage(): JSX.Element {
    return (
        <Layout title="Stepper - Debt Advisors">
            <Stepper stepper-type="full"/>
            {/* <input type="hidden" id="gclid_field" name="gclid_field" value=""/> */}
        </Layout>
    );
}

export default StepperPage;
