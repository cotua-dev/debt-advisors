import { Stepper } from '../../components/Stepper';
import { Layout } from '../../components/Layout';

function StudentLoanPage(): JSX.Element {
    return (
        <Layout title="Student Loan Debt - Debt Advisors">
            <Stepper stepper-type="full"/>
        </Layout>
    );
}

export default StudentLoanPage;
