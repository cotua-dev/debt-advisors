import Link from 'next/link';
import Head from 'next/head';
import { Layout } from '../../components/Layout';
import styles from '../../styles/shared.module.scss';
import { PageProps } from '../../shared/interfaces';

export async function getStaticProps(): Promise<PageProps> {
    return { props: {}, revalidate: 60 };
}

function ThankYouStudentLoan(): JSX.Element {
    return (
        <>
            <Head>
                <script dangerouslySetInnerHTML={{__html: `
                    gtag('event', 'conversion', {'send_to': '${process.env.NEXT_PUBLIC_GTAG}/${process.env.NEXT_PUBLIC_GTM_THANK_YOU}'});
                `}}></script>
            </Head>
            <Layout title="Thank You – Debt Advisors">
                <section className={styles['thank-you']}>
                    <div className={styles['content-wrapper']}>
                        <h1>{`Thank you for registering!`}</h1>
                        <p>{`A representative will contact you shortly`}</p>
                        <Link href="/">
                            <a>{`Return to home page`}</a>
                        </Link>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default ThankYouStudentLoan;
