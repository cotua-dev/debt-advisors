import { Stepper } from '../../components/Stepper';
import { Layout } from '../../components/Layout';

function PersonalPage(): JSX.Element {
    return (
        <Layout title="Personal Debt - Debt Advisors">
            <Stepper stepper-type="full"/>
        </Layout>
    );
}

export default PersonalPage;
