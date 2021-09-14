import Link from 'next/link';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Navigation } from '../../components/Navigation';
import styles from '../../styles/shared.module.scss';

interface ThankYouStaticProps {
    props: {};
    revalidate: number;
};

export async function getStaticProps(): Promise<ThankYouStaticProps> {
    return { props: {}, revalidate: 60 };
}

function ThankYouOhio(): JSX.Element {
    return (
        <>
            <Header title="Thank You – Debt Advisors"/>
            <Navigation/>
            <main>
                <section className={styles['thank-you']}>
                    <div className={styles['content-wrapper']}>
                        <h1>{`Thank you for registering!`}</h1>
                        <p>{`A representative will contact you shortly`}</p>
                        <Link href="/">
                            <a>{`Return to home page`}</a>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default ThankYouOhio;
