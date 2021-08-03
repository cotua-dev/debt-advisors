import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

interface AboutUsStaticProps {
    props: {};
    revalidate: number;
};

export async function getStaticProps(): Promise<AboutUsStaticProps> {
    return { props: {}, revalidate: 60 };
}

function AboutUs(): JSX.Element {
    return (
        <>
            <Header title="About Us - Debt Advisors"/>
            <main>
                <h1>About Us</h1>
            </main>
            <Footer/>
        </>
    );
}

export default AboutUs;
