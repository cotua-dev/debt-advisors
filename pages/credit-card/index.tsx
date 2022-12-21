import { Stepper } from '../../components/Stepper';
import { Layout } from '../../components/Layout';

function CreditCardPage(): JSX.Element {
    return (
        <Layout title="Credit Card Debt - Debt Advisors">
            <Stepper stepper-type="full"/>
        </Layout>
    );
}

export default CreditCardPage;
