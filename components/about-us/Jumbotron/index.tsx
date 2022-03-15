import styles from './Jumbotron.module.scss';
import aboutUsJumbotronImage from '../../../public/images/about-us-boy-girl.png';

export function Jumbotron(): JSX.Element {
    return (
        <section className={styles['about-us']}>
            <div className={styles['about-us-content']}>
                <h1 className={styles['title']}>{`About Us`}</h1>
                <p className={styles['content']}>
                    {`Debt Advisors of America is headquartered in San Diego, California. Debt Advisors of America is a member of the American Fair Credit Council; the International Association of Professional Debt Arbitrators; and the Better Business Bureau, with which Debt Advisors of America maintains an A+ rating.`}
                </p>
                <p className={styles['content']}>
                    {`Debt Advisors of America team members have, together, decades of experience in the debt-restructure industry, and can match you with a partner that will suit your needs.`}
                </p>
                <p className={styles['content']}>
                    {`We are committed to conducting our business honestly, ethically, and professionally.`}
                </p>
            </div>
            <picture>
                <source srcSet={aboutUsJumbotronImage.src}/>
                <img
                    className="w-full h-fit"
                    src={aboutUsJumbotronImage.src}
                    alt="About Us Jumbotron Image"
                    loading="lazy"
                />
            </picture>
        </section>
    );
}
