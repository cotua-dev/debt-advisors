import { Jumbotron } from '../components/home/Jumbotron';
import { Benefit } from '../components/home/Benefit';
import { WhatWeDo } from '../components/home/WhatWeDo';
import { DoIQualify } from '../components/home/DoIQualify';
import { Steps } from '../components/home/Steps';
import { CallUsNow } from '../components/home/CallUsNow';
import { Layout } from '../components/Layout';
import { PageProps } from '../shared/interfaces';

export async function getStaticProps(): Promise<PageProps> {
    return { props: {}, revalidate: 60 };
}

function Home(): JSX.Element {
    return (
        <>
            <Layout>
                <Jumbotron/>
                <WhatWeDo/>
                <DoIQualify/>
                <Steps/>
                <CallUsNow/>
                <Benefit/>
            </Layout>
            <script id="click-cease">
                {`
                    var script = document.createElement('script');
                    script.async = true; script.type = 'text/javascript';
                    var target = 'https://www.clickcease.com/monitor/stat.js';
                    script.src = target;var elem = document.head;elem.appendChild(script);
                `}
            </script>
            <noscript>
                <a
                    href="https://www.clickcease.com"
                    rel="nofollow"
                >
                    <img
                        src="https://monitor.clickcease.com/stats/stats.aspx"
                        alt="ClickCease"
                    />
                </a>
            </noscript>
        </>
    );
}

export default Home;
