import { Jumbotron } from '../components/home/Jumbotron';
import { Benefit } from '../components/home/Benefit';
import { WhatWeDo } from '../components/home/WhatWeDo';
import { DoIQualify } from '../components/home/DoIQualify';
import { Steps } from '../components/home/Steps';
import { CallUsNow } from '../components/home/CallUsNow';
import { Layout } from '../components/Layout';

interface HomeStaticProps {
    props: {};
    revalidate: number;
};

export async function getStaticProps(): Promise<HomeStaticProps> {
    return { props: {}, revalidate: 60 };
}

function Home(): JSX.Element {
    return (
        <Layout>
            <Jumbotron/>
            <WhatWeDo/>
            <DoIQualify/>
            <Steps/>
            <CallUsNow/>
            <Benefit/>
        </Layout>
    );
}

export default Home;
