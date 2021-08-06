import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';

interface ContactUsStaticProps {
    props: {};
    revalidate: number;
};

export async function getStaticProps(): Promise<ContactUsStaticProps> {
    return { props: {}, revalidate: 60 };
}

function ContactUs(): JSX.Element {
    return (
        <>
            <Header title="Contact Us - Debt Advisors"/>
            <Navigation/>
            <main>
                <h1>Contact Us</h1>
            </main>
            <Footer/>
        </>
    );
}

export default ContactUs;
