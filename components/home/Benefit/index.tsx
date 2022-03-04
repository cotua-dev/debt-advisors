import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './Benefit.module.scss';
import regularLogo from '../../../public/images/debt-advisors-logo.png';

export function Benefit(): JSX.Element {
    return (
        <section className={styles['benefit']}>
            <h2 className={styles['benefit-title']}>{`Here's How You Would Benefit`}</h2>
            <div className={styles['benefit-table-wrapper']}>
                <table className={styles['benefit-table']}>
                    <caption className={styles['benefit-table-caption']}>
                        <strong className={styles['benefit-table-caption-text']}>{`If you had a total debt of...`}</strong>
                        <br/>
                        <strong className={styles['benefit-table-caption-text']}>{`$25,000`}</strong>
                    </caption>
                    <thead>
                        <tr>
                            <th></th>
                            <th><strong className={styles['benefit-table-head-text']}>{`Monthly Payment`}</strong></th>
                            <th><strong className={styles['benefit-table-head-text']}>{`Total Repayment`}</strong></th>
                            <th><strong className={styles['benefit-table-head-text']}>{`Debt Free In`}</strong></th>
                            <th><strong className={styles['benefit-table-head-text']}>{`Interest Rate`}</strong></th>
                            <th><strong className={styles['benefit-table-head-text']}>{`1-On-1 Expert Help`}</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <picture>
                                    <source srcSet={regularLogo.src}/>
                                    <img
                                        className="w-36 mx-auto"
                                        src={regularLogo.src}
                                        alt="Debt Advisors Of America Regular Logo"
                                        loading="lazy"
                                    />
                                </picture>
                            </td>
                            <td><strong className={styles['debt-advisors-data']}>{`$408`}</strong></td>
                            <td><strong className={styles['debt-advisors-data']}>{`$18,750`}</strong></td>
                            <td><strong className={styles['debt-advisors-data']}>{`46 months`}</strong></td>
                            <td><strong className={styles['debt-advisors-data']}>{`0%`}</strong></td>
                            <td><FontAwesomeIcon className="w-6 h-6 text-green-700 mx-auto" icon={faCheck}/></td>
                        </tr>
                        <tr>
                            <td><strong className={styles['debt-advisors-row-label']}>{`Consolidation Loan`}</strong></td>
                            <td><p>{`$676`}</p></td>
                            <td><p>{`$40,580`}</p></td>
                            <td><p>{`60 months`}</p></td>
                            <td><p>{`21%`}</p></td>
                            <td><FontAwesomeIcon className="w-6 h-6 text-red-700 mx-auto" icon={faTimes}/></td>
                        </tr>
                        <tr>
                            <td><strong className={styles['debt-advisors-row-label']}>{`Making Only Minimum Payments`}</strong></td>
                            <td><p>{`$729`}</p></td>
                            <td><p>{`$72,262`}</p></td>
                            <td><p>{`230 months`}</p></td>
                            <td><p>{`23%`}</p></td>
                            <td><FontAwesomeIcon className="w-6 h-6 text-red-700 mx-auto" icon={faTimes}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className={styles['benefit-content']}>
                {`* The minimum payment example is based on a credit card for individuals with fair credit, having an interest rate of 23% (rounded up to the nearest percentage point) and assumes a payment of 3% of the balance. Please note that, assuming the principal balance does not increase due to additional charges, fees, and interest, the required minimum monthly payment will decrease over time as additional minimum monthly payments are made and reduce the total balance.`}
            </p>
            <strong className={styles['benefit-content']}>
                {`Our goals are to help you resolve your enrolled debts as quickly as possible and to get you into a plan with one of our licensed partners to negotiate settlements for less than what you owe`}
            </strong>
            <Link href="/stepper">
                <a className={styles['start-reducing-payments-link']}>
                    {`Start Reducing Your Payments`}
                </a>
            </Link>
            <p className={styles['benefit-content']}>
                {`We've helped our previous referrals achieve major savings`}
            </p>
        </section>
    );
}
