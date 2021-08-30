import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';
import { Jumbotron } from '../components/home/Jumbotron';
import { Reviews } from '../components/home/Reviews';
import { Benefit } from '../components/home/Benefit';
import { WhatWeDo } from '../components/home/WhatWeDo';
import { DoIQualify } from '../components/home/DoIQualify';
import { Steps } from '../components/home/Steps';
import { CallUsNow } from '../components/home/CallUsNow';

interface HomeStaticProps {
    props: {};
    revalidate: number;
};

export async function getStaticProps(): Promise<HomeStaticProps> {
    return { props: {}, revalidate: 60 };
}

function Home(): JSX.Element {
    return (
        <>
            <Header/>
            <Navigation/>
            <main>
                <Jumbotron/>
                <WhatWeDo/>
                <DoIQualify/>
                <Steps/>
                <CallUsNow/>
                <Benefit/>
            </main>
            <Footer/>
        </>
    );
}

export default Home;
