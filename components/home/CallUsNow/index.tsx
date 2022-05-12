import styles from './CallUsNow.module.scss';

export function CallUsNow(): JSX.Element {
    return (
        <section className={styles['debt-advisors-call-us-now']}>
            <div className={styles['content-wrapper']}>
                <strong className={styles['content-text']}>
                    {`For expert debt resolution advice you can trust the licensed partners of Debt Advisors of America`}
                </strong>
                <a className={styles['phone-link']} href="tel:+18009202365">
                    <span className={styles['number']}>{`800-920-2365`}</span>
                    <span className={styles['text']}>{`CALL US NOW`}</span>
                </a>
            </div>
        </section>
    );
}
