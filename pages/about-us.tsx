import { Jumbotron } from '../components/about-us/Jumbotron';
import { Learn } from '../components/about-us/Learn';
import { Layout } from '../components/Layout';
import { PageProps } from '../shared/interfaces';

export async function getStaticProps(): Promise<PageProps> {
    return { props: {}, revalidate: 60 };
}

function AboutUs(): JSX.Element {
    return (
        <Layout title="About Us – Debt Advisors">
            <Jumbotron/>
            <Learn/>
        </Layout>
    );
}

export default AboutUs;
