import { ThankYouLayout } from '../components/ThankYouLayout';
import styles from '../styles/shared.module.scss';

function ThankYouOne(): JSX.Element {
    return (
        <ThankYouLayout title="Thank You – Debt Advisors">
            <section className={styles['thank-you']}>
                <div className={styles['content-wrapper']}>
                    <h1>{`Thank you for registering!`}</h1>
                    <p>{`A representative will contact you shortly`}</p>
                    <a
                        className={styles['thank-you-button']}
                        href="tel:+18442763691"
                    >{`Click to Call`}</a>
                </div>
            </section>
        </ThankYouLayout>
    );
}

export default ThankYouOne;
