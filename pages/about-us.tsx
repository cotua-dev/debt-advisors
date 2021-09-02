import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';
import { Jumbotron } from '../components/about-us/Jumbotron';
import { Learn } from '../components/about-us/Learn';

export interface AboutUsStaticProps {
    props: {};
    revalidate: number;
};

export async function getStaticProps(): Promise<AboutUsStaticProps> {
    return { props: {}, revalidate: 1 };
}

function AboutUs(): JSX.Element {
    return (
        <>
            <Header title="About Us – Debt Advisors"/>
            <Navigation/>
            <main>
                <Jumbotron/>
                <Learn/>
            </main>
            <Footer/>
        </>
    );
}

export default AboutUs;
