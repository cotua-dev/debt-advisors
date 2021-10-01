import { Header } from '../../components/Header';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { Stepper } from '../../components/Stepper';

interface ColoradoPageProps {
    props: {},
    revalidate: number;
};

export async function getStaticProps(): Promise<ColoradoPageProps> {
    return { props: {}, revalidate: 60 };
}

function ColoradoPage(): JSX.Element {
    return (
        <>
            <Header title="Colorado - Debt Advisors"/>
            <Navigation/>
            <main>
                <Stepper/>
            </main>
            <Footer/>
        </>
    );
}

export default ColoradoPage;
