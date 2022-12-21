import Link from 'next/link';
import { Layout } from '../../components/Layout';
import { ThankYouLayout } from '../../components/ThankYouLayout';
import styles from '../../styles/shared.module.scss';

function ThankYouMedical(): JSX.Element {
    return (
        <ThankYouLayout>
            <Layout title="Thank You – Debt Advisors">
                <section className={styles['thank-you']}>
                    <div className={styles['content-wrapper']}>
                        <h1>{`Thank you for registering!`}</h1>
                        <p>{`A representative will contact you shortly`}</p>
                        <Link href="/">
                            {`Return to home page`}
                        </Link>
                    </div>
                </section>
            </Layout>
        </ThankYouLayout>
    );
}

export default ThankYouMedical;
