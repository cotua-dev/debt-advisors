import Link from 'next/link';
import jumbotronImage from '../../../public/images/home-boy-girl.png';
import bbbImage from '../../../public/images/bbb.png';
// import afccImage from '../../../public/images/afcc.png';
import styles from './Jumbotron.module.scss';

export function Jumbotron(): JSX.Element {
    return (
        <section className={styles['debt-advisors-jumbotron']}>
            <picture>
                <source srcSet={jumbotronImage.src}/>
                <img
                    className={styles['jumbotron-image']}
                    src={jumbotronImage.src}
                    alt="Home Page Jumbotron Image"
                    loading="lazy"
                />
            </picture>
            <div className={styles['jumbotron-content-wrapper']}>
                <h1 className={styles['jumbotron-title']}>{`Reduce Your Monthly Payments Today!`}</h1>
                <p className={styles['jumbotron-content']}>{`Have more than $5,000 of debt? See how much you can save with our debt calculator.`}</p>
                <Link href="/stepper">
                    <a className={styles['start-button']}>{`Start - it's free!`}</a>
                </Link>
                <div className="flex flex-row mt-4">
                    <a
                        href="https://www.bbb.org/us/ca/san-diego/profile/debt-relief-services/debt-advisors-of-america-1126-1000064078"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <picture>
                            <source srcSet={bbbImage.src}/>
                            <img
                                className="w-28"
                                src={bbbImage.src}
                                alt="Better Business Bureau Logo"
                                loading="lazy"
                            />
                        </picture>
                    </a>
                    {/* <a
                        className="ml-4"
                        href="https://americanfaircreditcouncil.org/view-members/debt-advisors-of-america/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <picture>
                            <source srcSet={afccImage.src}/>
                            <img
                                className="w-28"
                                src={afccImage.src}
                                alt="American Fair Credit Council Logo"
                                loading="lazy"
                            />
                        </picture>
                    </a> */}
                </div>
            </div>
        </section>
    );
}
