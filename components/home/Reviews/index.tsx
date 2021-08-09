import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Review } from './Reviews.interfaces';
import styles from './Reviews.module.scss';
import womanOneImage from '../../../public/images/woman-1.svg';
import womanTwoImage from '../../../public/images/woman-2.svg';
import womanThreeImage from '../../../public/images/woman-3.svg';
import manOneImage from '../../../public/images/man-1.svg';
import manTwoImage from '../../../public/images/man-2.svg';
import manThreeImage from '../../../public/images/man.svg';
import girlImage from '../../../public/images/girl.svg';

export function Reviews(): JSX.Element {
    const reviews: Review[] = [
        {
            key: 1,
            image: womanOneImage,
            imageAlt: 'Woman One Reviewer Placeholder Image',
            name: 'Test Name',
            content: `Test Review Content`,
        },
    ];

    const renderFiveStars = (): JSX.Element => {
        return (
            <>
                <FontAwesomeIcon className={styles['star']} icon={faStar}/>
                <FontAwesomeIcon className={styles['star']} icon={faStar}/>
                <FontAwesomeIcon className={styles['star']} icon={faStar}/>
                <FontAwesomeIcon className={styles['star']} icon={faStar}/>
                <FontAwesomeIcon className={styles['star']} icon={faStar}/>
            </>
        );
    }

    return (
        <section className={styles['reviews']} id="debt-advisors-reviews">
            <div className={styles['content-wrapper']}>
                <h2 className={styles['review-title']}>{`Top-Rated Debt Advisor`}</h2>
                <div className={styles['initial-stars-wrapper']}>
                    {renderFiveStars()}
                </div>
                <div className={styles['reviews-wrapper']}>
                    {reviews.map((review: Review) => (
                        <div className={styles['review']} key={review.key}>
                            <div className={styles['review-header']}>
                                <picture>
                                    <source srcSet={review.image.src}/>
                                    <img
                                        className={styles['reviewer-image']}
                                        src={review.image.src}
                                        alt={review.imageAlt}
                                        loading="lazy"
                                    />
                                </picture>
                                <strong className={styles['reviewer-name']}>{review.name}</strong>
                            </div>
                            <div className={styles['review-stars']}>
                                {renderFiveStars()}
                            </div>
                            <div className={styles['review-content-wrapper']}>
                                <p className={styles['review-content']}>{review.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
