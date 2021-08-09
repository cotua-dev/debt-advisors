import styles from './Jumbotron.module.scss';
import optionsJumbotronImage from '../../../public/images/options-lady.png';

export function Jumbotron(): JSX.Element {
    return (
        <section className={styles['debt-advisors-options-jumbotron']}>
            <h1 className={styles['options-title']}>{`Options`}</h1>
            <picture>
                <source srcSet={optionsJumbotronImage.src}/>
                <img
                    className={styles['options-jumbotron-image']}
                    src={optionsJumbotronImage.src}
                    alt="Options Jumbotron Image"
                    loading="lazy"
                />
            </picture>
        </section>
    );
}
