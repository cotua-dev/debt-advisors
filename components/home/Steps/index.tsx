import styles from './Steps.module.scss';
import freeConsultationImage from '../../../public/images/free-consultation.png';
import considerYourOptionsImage from '../../../public/images/consider-your-options.png';
import getToWorkImage from '../../../public/images/get-to-work.png';

export function Steps(): JSX.Element {
    return (
        <section className={styles['debt-advisors-steps']}>
            <div className={styles['step-wrapper']}>
                <div className={styles['step-content']}>
                    <h3 className={styles['step-content-title']}>{`1. Free Consultation`}</h3>
                    <p className={styles['step-content-text']}>
                        {`Take a few minutes to talk with our team. Ask questions. Learn about us. Have a certified debt consultant explain debt restructure program. Together, we can discuss whether referral for a debt restructure program works for you.`}
                    </p>
                </div>
                <picture>
                    <source srcSet={freeConsultationImage.src}/>
                    <img
                        className={styles['step-image'] + " " + styles['step-one']}
                        src={freeConsultationImage.src}
                        alt="Free Consultation Image"
                        loading="lazy"
                    />
                </picture>
            </div>
            <div className={styles['step-wrapper']}>
                <picture>
                    <source srcSet={considerYourOptionsImage.src}/>
                    <img
                        className={styles['step-image'] + " " + styles['step-two']}
                        src={considerYourOptionsImage.src}
                        alt="Consider Your Options Image"
                        loading="lazy"
                    />
                </picture>
                <div className={styles['step-content']}>
                    <h3 className={styles['step-content-title']}>{`2. Consider Your Options`}</h3>
                    <p className={styles['step-content-text']}>
                        {`If you are qualified, our team provides you with an estimate of how much you can save by enrolling into a debt restructure program. Once you decide to move forward, a certified debt consultant partner works to tailor a program specific to you.`}
                    </p>
                </div>
            </div>
            <div className={styles['step-wrapper']}>
                <div className={styles['step-content']}>
                    <h3 className={styles['step-content-title']}>{`3. Get To Work`}</h3>
                    <p className={styles['step-content-text']}>
                        {`Our licensed partners have decades of experience negotiating with creditors. They put this experience to work for you, all with the goal of obtaining the best possible resolutions from your creditors.`}
                    </p>
                </div>
                <picture>
                    <source srcSet={getToWorkImage.src}/>
                    <img
                        className={styles['step-image'] + " " + styles['step-three']}
                        src={getToWorkImage.src}
                        alt="Get To Work Image"
                        loading="lazy"
                    />
                </picture>
            </div>
        </section>
    );
}
