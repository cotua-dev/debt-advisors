import { Jumbotron } from '../components/about-us/Jumbotron';
import { Learn } from '../components/about-us/Learn';
import { Layout } from '../components/Layout';

function AboutUs(): JSX.Element {
    return (
        <Layout title="About Us – Debt Advisors">
            <Jumbotron/>
            <Learn/>
        </Layout>
    );
}

export default AboutUs;
