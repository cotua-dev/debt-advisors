import { Stepper } from '../../components/Stepper';
import { Layout } from '../../components/Layout';

function DebtPage(): JSX.Element {
    return (
        <Layout title="Debt - Debt Advisors">
            <Stepper stepper-type="full"/>
        </Layout>
    );
}

export default DebtPage;
