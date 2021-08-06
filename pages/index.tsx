import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';

interface HomeStaticProps {
    props: {};
    revalidate: number;
};

export async function getStaticProps(): Promise<HomeStaticProps> {
    return { props: {}, revalidate: 60 };
}

function Home(): JSX.Element {
    return (
        <>
            <Header/>
            <Navigation/>
            <main>
                <h1>Hello World!</h1>
            </main>
            <Footer/>
        </>
    );
}

export default Home;
