import Link from 'next/link';
import { ThankYouLayout } from '../../components/ThankYouLayout';
import styles from '../../styles/shared.module.scss';

function ThankYouPersonal(): JSX.Element {
    return (
        <ThankYouLayout title="Thank You – Debt Advisors">
            <section className={styles['thank-you']}>
                <div className={styles['content-wrapper']}>
                    <h1>{`Thank you for registering!`}</h1>
                    <p>{`A representative will contact you shortly`}</p>
                    <Link href="/">
                        {`Return to home page`}
                    </Link>
                </div>
            </section>
        </ThankYouLayout>
    );
}

export default ThankYouPersonal;
