import { Jumbotron } from '../components/options/Jumbotron';
import { Scenarios } from '../components/options/Scenarios';
import { Layout } from '../components/Layout';

function Options(): JSX.Element {
    return (
        <Layout title="Options – Debt Advisors">
            <Jumbotron/>
            <Scenarios/>
        </Layout>
    );
}

export default Options;
