import { useRouter } from 'next/router';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.scss';
import whiteLogo from '../../public/images/debt-advisors-white-logo.png';

export function Footer(): JSX.Element {
    const router = useRouter();
    // cite: https://support.trustpilot.com/hc/en-us/articles/115011421468--Add-a-TrustBox-widget-to-a-single-page-application
    return (
        <footer className={styles['debt-advisors-footer']}>
            <div className={styles['footer-content-wrapper']}>
                <div className={styles['logo-text']}>
                    <Link href="/" aria-label="Home Page Link">
                        <picture>
                            <source srcSet={whiteLogo.src}/>
                            <img
                                data-testid="white-logo"
                                className={styles['white-logo']}
                                src={whiteLogo.src}
                                alt="Debt Advisors Of America White Logo"
                                loading="lazy"
                            />
                        </picture>
                    </Link>
                    <p
                        data-testid="footer-text"
                        className={styles['footer-text']}
                    >
                        {`We would be delighted to answer any inquiry you might have about your debt and how we can help!`}
                    </p>
                </div>
                <div className={styles['contact-us']}>
                    <strong className={styles['title']}>{`Office Hours`}</strong>
                    <p data-testid="monday-to-friday" className={styles['content']}>
                        {`Monday to Friday 6:00 am to 7:00 pm PST`}
                    </p>
                    <p data-testid="saturday" className={styles['content']}>
                        {`Saturday 7:00 am to 2:00 pm PST`}
                    </p>
                </div>
                <div className={styles['phone-email-submit']}>
                    <strong className={styles['title']}>{`Contact Us`}</strong>
                    <div className={styles['contact-info']}>
                        {/* <p className={styles['title']}>
                            <FontAwesomeIcon className={styles['icon']} icon={faPhoneAlt}/> {`Phone`}
                        </p> */}
                        <a
                            data-testid="phone"
                            className={styles['info']}
                            href="tel:+18009202365"
                        >{`800-920-2365`}</a>
                    </div>
                    <div className={styles['contact-info']}>
                        {/* <p className={styles['title']}>
                            <FontAwesomeIcon className={styles['icon']} icon={faEnvelope}/> {`Email`}
                        </p> */}
                        <a
                            data-testid="email"
                            className={styles['info']}
                            href="mailto:info@contactdaa.com"
                        >{`info@contactdaa.com`}</a>
                    </div>
                    {/* <div className={styles['email-submit']}>
                        <input
                            className={styles['email-field']}
                            type="email"
                            placeholder="Enter your email"
                        />
                        <button
                            className={styles['submit-button']}
                            type="button"
                        >{`Submit`}</button>
                    </div> */}
                </div>
            </div>
            <div className={styles['legal-wrapper']}>
                <Link href="/terms-of-use" className={styles['legal-link']}>
                    {'Terms of Use'}
                </Link>
                <span>{' / '}</span>
                <Link href="/privacy-policy" className={styles['legal-link']}>
                    {'Privacy Policy'}
                </Link>
            </div>
            {/* <div className="mt-4">
                <div
                    className="trustpilot-widget"
                    data-locale="en-US"
                    data-template-id="56278e9abfbbba0bdcd568bc"
                    data-businessunit-id="63c8878df7ad8e71f3e6dae2"
                    data-style-height="52px"
                    data-style-width="100%"
                >
                    <a
                        href="https://www.trustpilot.com/review/debtadvisorsofamerica.com"
                        target="_blank"
                        rel="noreferrer"
                    >Trustpilot</a>
                </div>
            </div> */}
        </footer>
    );
};
