import { Stepper } from '../components/Stepper';
import { Layout } from '../components/Layout';
import { PageProps } from '../shared/interfaces';

export async function getStaticProps(): Promise<PageProps> {
    return { props: {}, revalidate: 60 };
}

function StepperPage(): JSX.Element {
    return (
        <>
            <Layout title="Stepper - Debt Advisors">
                <Stepper stepper-type="full"/>
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

export default StepperPage;
