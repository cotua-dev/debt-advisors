import { Jumbotron } from '../components/options/Jumbotron';
import { Scenarios } from '../components/options/Scenarios';
import { Layout } from '../components/Layout';

interface OptionsStaticProps {
    props: {};
    revalidate: number;
};

export async function getStaticProps(): Promise<OptionsStaticProps> {
    return { props: {}, revalidate: 60 };
}

function Options(): JSX.Element {
    return (
        <Layout title="Options – Debt Advisors">
            <Jumbotron/>
            <Scenarios/>
        </Layout>
    );
}

export default Options;
