import Link from 'next/link';
import { Action } from './WhatWeDo.interfaces';
import styles from './WhatWeDo.module.scss';
import whatWeDoImageOne from '../../../public/images/what-we-do-1.png';
import whatWeDoImageTwo from '../../../public/images/what-we-do-2.png';
import whatWeDoImageThree from '../../../public/images/what-we-do-3.png';

export function WhatWeDo(): JSX.Element {
    const actions: Action[] = [
        {
            key: 1,
            image: whatWeDoImageOne.src,
            imageAlt: 'You Tell Us About Your Financial Situation Logo',
            title: 'You Tell Us About Your Financial Situation',
            description: 'Call us or fill out our online form to receive a free, no obligation consultation',
        },
        {
            key: 2,
            image: whatWeDoImageTwo.src,
            imageAlt: 'We Tailor a Debt Relief Program That is Right For You Logo',
            title: 'We Tailor a Debt Relief Program That is Right For You',
            description: 'Programs can be modified to fit your specific needs',
        },
        {
            key: 3,
            image: whatWeDoImageThree.src,
            imageAlt: 'You Tell Us About Your Financial Situation Logo',
            title: 'You Tell Us About Your Financial Situation',
            description: 'Call us or fill out our online form to receive a free, no obligation consultation',
        },
    ];

    return (
        <section className={styles['what-we-do']}>
            <h2 className={styles['what-we-do-title']}>{`What We Do`}</h2>
            <p className={styles['what-we-do-content']}>
                {`Debt Advisors of America helps individuals across the U.S. by 1) gathering personal information to determine a consolidation plan that will best fit your needs. Our service is a form of debt consolidation without a loan. 2) Our customized evaluations aim to help you reduce what you owe, avoid filing for bankruptcy, and finally overcome overwhelming debt.`}
            </p>
            <div className={styles['actions-wrapper']}>
                {actions.map((action: Action) => (
                    <div className={styles['action']} key={action.key}>
                        <picture>
                            <source srcSet={action.image}/>
                            <img
                                className={styles['action-image']}
                                src={action.image}
                                alt={action.imageAlt}
                                loading="lazy"
                            />
                        </picture>
                        <strong className={styles['action-title']}>{action.title}</strong>
                        <p className={styles['action-description']}>{action.description}</p>
                    </div>
                ))}
            </div>
            <Link href="/stepper">
                <a className={styles['free-debt-consultation']}>{`Get a Free Debt Consultation Now`}</a>
            </Link>
            <p className={styles['details']}>
                {`For more details `}
                <Link href="/">
                    <a className={styles['how-it-works']}>{`visit our How it Works page`}</a>
                </Link>
            </p>
        </section>
    );
}
