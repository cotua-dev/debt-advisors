import styles from './DoIQualifyOhio.module.scss';

export function DoIQualifyOhio(): JSX.Element {
    return (
        <section className={styles['do-i-qualify']}>
            <div className={styles['qualify-content']}>
                <h2 className={styles['qualify-title']}>{`Do I Qualify for Debt Consolidation in Ohio?`}</h2>
                <strong className={styles['qualify-upper']}>{`You have over $10,000 in debt`}</strong>
                <p className={styles['qualify-lower']}>
                    {`In Ohio, this is the baseline for us to negotiate on your behalf; it gives us greater leverage and a better chance at settling debts with your creditors.`}
                </p>
                <strong className={styles['qualify-upper']}>{`You have unsecured debt`}</strong>
                <p className={styles['qualify-lower']}>
                    {`We only work with unsecured debts, which are debts that do not have collateral attached to them. Credit cards, medical bills and payday loans are all examples of unsecured debt. Debts like student loans and those that do have collateral attached to them like mortgages and car loans are not eligible for debt settlement.`}
                </p>
                <strong className={styles['qualify-upper']}>{`You are able to make monthly payments`}</strong>
                <p className={styles['qualify-lower']}>
                    {`In Ohio, The programs we recommend to you involve involves making deposits of an agreed upon amount into a dedicated account every month – consistent monthly deposits are crucial to your overall success.`}
                </p>
            </div>
        </section>
    );
}
