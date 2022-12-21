import { Stepper } from '../../components/Stepper';
import { DoIQualifyOhio } from '../../components/home/DoIQualifyOhio';
import { Layout } from '../../components/Layout';

function OhioPage(): JSX.Element {
    return (
        <Layout title="Ohio - Debt Advisors">
            <Stepper stepper-type="full"/>
            <DoIQualifyOhio/>
        </Layout>
    );
}

export default OhioPage;
