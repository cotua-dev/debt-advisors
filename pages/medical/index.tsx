import { Stepper } from '../../components/Stepper';
import { Layout } from '../../components/Layout';

function MedicalPage(): JSX.Element {
    return (
        <Layout title="Medical Debt - Debt Advisors">
            <Stepper stepper-type="full"/>
        </Layout>
    );
}

export default MedicalPage;
