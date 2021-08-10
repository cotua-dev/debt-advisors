import styles from './Calculator.module.scss';
import debtAdvisorsRegularLogo from '../../../public/images/debt-advisors-logo.png';

export function Calculator(): JSX.Element {
    return (
        <section className={styles['debt-calculator']}>
            <h2 className={styles['debt-calculator-title']}>{`Your Financial Situation`}</h2>
            <div className={styles['calculator-form-wrapper']}>
                <form className={styles['calculator-form']}>
                    <div className={styles['fields-wrapper']}>
                        <div className={styles['field-wrapper']}>
                            <label className={styles['field-label']} htmlFor="total-unsecured-debt">
                                {`Total Unsecured Debt`}
                                <span className={styles['required']}>{` *`}</span>
                            </label>
                            <input
                                className={styles['field']}
                                type="number"
                                required
                                id="total-unsecured-debt"
                                name="total-unsecured-debt"
                            />
                        </div>
                        <div className={styles['field-wrapper']}>
                            <label className={styles['field-label']} htmlFor="months-to-pay-off">
                                {`Months To Pay Off`}
                            </label>
                            <select
                                className={styles['field']}
                                id="months-to-pay-off"
                                name="months-to-pay-off"
                            >
                                <option></option>
                                <option value="24">{`24 months`}</option>
                                <option value="36">{`36 months`}</option>
                                <option value="48">{`48 months`}</option>
                            </select>
                        </div>
                        <div className={styles['field-wrapper']}>
                            <label className={styles['field-label']} htmlFor="average-interest-rate">
                                {`Average Interest Rate`}
                            </label>
                            <input
                                className={styles['field']}
                                type="number"
                                id="average-interest-rate"
                                name="average-interest-rate"
                            />
                        </div>
                    </div>
                    <div className={styles['submit-wrapper']}>
                        <p className={styles['required']}>{`* Required`}</p>
                        <button className={styles['submit-button']} type="submit">{`CALCULATE`}</button>
                    </div>
                </form>
            </div>
            <div className={styles['calculations-table-wrapper']}>
                <table className={styles['calculations-table']}>
                    <thead>
                        <tr>
                            <th></th>
                            <th>{`Credit Counseling`}</th>
                            <th>{`Do Nothing (Pay Minimum)`}</th>
                            <th className={styles['debt-advisors']}>
                                <picture>
                                    <source srcSet={debtAdvisorsRegularLogo.src}/>
                                    <img
                                        className={styles['regular-logo']}
                                        src={debtAdvisorsRegularLogo.src}
                                        alt="Debt Advisors Regular Logo"
                                        loading="lazy"
                                    />
                                </picture>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{`Total Unsecured Debt`}</td>
                            <td></td>
                            <td></td>
                            <td className={styles['debt-advisors']}></td>
                        </tr>
                        <tr>
                            <td>{`Months To Pay Off`}</td>
                            <td></td>
                            <td></td>
                            <td className={styles['debt-advisors']}></td>
                        </tr>
                        <tr>
                            <td>{`Interest Rate`}</td>
                            <td></td>
                            <td></td>
                            <td className={styles['debt-advisors']}></td>
                        </tr>
                        <tr>
                            <td>{`Extra Interest Paid`}</td>
                            <td></td>
                            <td></td>
                            <td className={styles['debt-advisors']}></td>
                        </tr>
                        <tr>
                            <td>{`Monthly Payment`}</td>
                            <td></td>
                            <td></td>
                            <td className={styles['debt-advisors']}></td>
                        </tr>
                        <tr>
                            <td>{`Your Total Cost`}</td>
                            <td></td>
                            <td></td>
                            <td className={styles['debt-advisors']}></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}
