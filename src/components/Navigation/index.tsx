import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './Navigation.module.scss';
import type { NavigationLink } from './Navigation.interfaces';
// import regularLogo from '../../public/images/debt-advisors-logo.png';

export function Navigation(): JSX.Element {
    const links: NavigationLink[] = [
        { key: 'home', label: 'Home', url: '/', aria: 'Home Page Link' },
        { key: 'options', label: 'Options', url: '/options', aria: 'Options Page Link' },
        // { key: 'debt-calculator', label: 'Debt Calculator', url: '/debt-calculator', aria: 'Debt Calculator Page Link' },
        { key: 'about-us', label: 'About Us', url: '/about-us', aria: 'About Us Page Link' },
        // { key: 'contact-us', label: 'Contact Us', url: '/contact-us', aria: 'Contact Us Page Link' },
    ];
    const [navToggle, setNavToggle] = useState(false);

    return (
        <>
            <nav className={styles['debt-advisors-navigation']}>
                <a href="/" aria-label="Home Page Link">
                    <picture>
                        <source srcSet="/images/debt-advisors-logo.png"/>
                        <img
                            className={styles['logo']}
                            data-testid="regular-logo"
                            src="/images/debt-advisors-logo.png"
                            alt="Debt Advisors Of America Logo"
                            loading="lazy"
                        />
                    </picture>
                </a>
                <div className={styles['links-wrapper']}>
                    {links.map((link: NavigationLink) => (
                        <a
                            href={link.url}
                            key={link.key}
                            aria-label={link.aria}
                            className={styles['link']}
                        >{link.label}</a>
                    ))}
                </div>
                <button
                    data-testid="open-mobile-navigation-button"
                    className={styles['mobile-nav-toggle']}
                    type="button"
                    onClick={() => setNavToggle(true)}
                    aria-label="Mobile Navigation Toggle Button"
                ><FontAwesomeIcon className={styles['hamburger'] as string} icon={faBars}/></button>
            </nav>
            {navToggle &&
                <aside
                    data-testid="mobile-navigation"
                    className={styles['debt-advisors-mobile-navigation']}
                >
                    <div className={styles['mobile-navigation-header']}>
                        <button
                            data-testid="close-mobile-navigation-button"
                            className={styles['close-mobile-navigation']}
                            type="button"
                            onClick={() => setNavToggle(false)}
                            aria-label="Mobile Navigation Toggle Button"
                        ><FontAwesomeIcon className={styles['close'] as string} icon={faTimes}/></button>
                    </div>
                    <div className={styles['mobile-links-wrapper']}>
                        {links.map((link: NavigationLink) => (
                            <a
                                href={link.url}
                                key={link.key}
                                className={styles['link']}
                                aria-label={link.aria}
                            >{link.label}</a>
                        ))}
                    </div>
                </aside>
            }
        </>
    );
}
