import styles from './Jumbotron.module.scss';
import debtCalculatorJumbotronImage from '../../../public/images/debt-calculator-boy.png';

export function Jumbotron(): JSX.Element {
    return (
        <section className={styles['debt-calculator-jumbotron']}>
            <div className={styles['jumbotron-content']}>
                <h1 className={styles['jumbotron-title']}>{`Debt Calculator`}</h1>
                <p className={styles['jumbotron-content']}>
                    {`This calculator will estimate the amount of time it will take to pay off a given debt if you are paying a monthly minimum payment. Plus, it will also tell you the “Approximate Total” you will pay between now and when the debt is paid off`}
                </p>
            </div>
            <picture>
                <source srcSet={debtCalculatorJumbotronImage.src}/>
                <img
                    className={styles['jumbotron-image']}
                    src={debtCalculatorJumbotronImage.src}
                    alt="Debt Calculator Jumbotron Image"
                    loading="lazy"
                />
            </picture>
        </section>
    );
}
