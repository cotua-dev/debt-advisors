import { Layout } from '../components/Layout';
import styles from '../styles/shared.module.scss';
import { PageProps } from '../shared/interfaces';

export async function getStaticProps(): Promise<PageProps> {
    return { props: {}, revalidate: 60 };
}

function Disqualify(): JSX.Element {
    return (
        <>
            <Layout title="Disqualified – Debt Advisors">
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
            </Layout>
        </>
    );
}

export default Disqualify;
