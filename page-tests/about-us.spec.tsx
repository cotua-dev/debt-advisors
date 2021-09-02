import { render, RenderResult } from '@testing-library/react';
import AboutUs, { getStaticProps, AboutUsStaticProps } from '../pages/about-us';

describe('About Us Page', (): void => {
    let renderResult: RenderResult;

    beforeAll((): RenderResult => renderResult = render(<AboutUs/>));

    it('renders', (): void => {
        const { container } = renderResult;
        expect(container).toBeTruthy();
    });

    it('check static props', async (): Promise<void> => {
        const staticProps: AboutUsStaticProps = await getStaticProps();
        expect(staticProps).toMatchObject({ props: {}, revalidate: 1 });
    });

    afterAll((): void => renderResult.unmount());
});
