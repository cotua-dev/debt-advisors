import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';
import styles from '../styles/shared.module.scss';

export interface DisqualifyStaticProps {
    props: {};
    revalidate: number;
};

export async function getStaticProps(): Promise<DisqualifyStaticProps> {
    return { props: {}, revalidate: 1 };
}

function Disqualify(): JSX.Element {
    return (
        <>
            <Header title="Disqualified – Debt Advisors"/>
            <Navigation/>
            <main>
                <section className={styles['dq']}>
                    <div className={styles['content-wrapper']}>
                        <h1>{`We're Sorry`}</h1>
                        <p>
                            {`While we'd love to help, unfortunately, DAA does not currently offer loan programs that fit your criteria. Inqueries from North Dakota and South Carolina are difficult for us to fulfill. We also do not service clients with debt less than $7,500.`}
                        </p>
                        <p>{`Thank You!`}</p>
                        <p>{`DAA team`}</p>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default Disqualify;
