import Link from 'next/link';
import { Layout } from '../components/Layout';
import { ThankYouLayout } from '../components/ThankYouLayout';
import styles from '../styles/shared.module.scss';
import { PageProps } from '../shared/interfaces';

export async function getStaticProps(): Promise<PageProps> {
    return { props: {}, revalidate: 60 };
}

function ThankYou(): JSX.Element {
    return (
        <ThankYouLayout>
            <Layout title="Thank You – Debt Advisors">
                <section className={styles['thank-you']}>
                    <div className={styles['content-wrapper']}>
                        <h1>{`Thank you for registering!`}</h1>
                        <p>{`A representative will contact you shortly`}</p>
                        <a
                            className={styles['phone-number']}
                            href="tel:+18009202365"
                        >{`Phone: (800) 920-2365`}</a>
                        <Link href="/">
                            <a className={styles['thank-you-button']}>{`Return to home page`}</a>
                        </Link>
                    </div>
                </section>
            </Layout>
        </ThankYouLayout>
    );
}

export default ThankYou;
