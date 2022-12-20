import { Stepper } from '../../components/Stepper';
import { DoIQualifyOhio } from '../../components/home/DoIQualifyOhio';
import { PageProps } from '../../shared/interfaces';
import { Layout } from '../../components/Layout';

export async function getStaticProps(): Promise<PageProps> {
    return { props: {}, revalidate: 60 };
}

function OhioPage(): JSX.Element {
    return (
        <Layout title="Ohio - Debt Advisors">
            <Stepper stepper-type="full"/>
            <DoIQualifyOhio/>
        </Layout>
    );
}

export default OhioPage;
