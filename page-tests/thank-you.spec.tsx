import { render, RenderResult } from '@testing-library/react';
import ThankYou, { getStaticProps, ThankYouStaticProps } from '../pages/thank-you';

describe('Thank You Page', (): void => {
    let renderResult: RenderResult;

    beforeAll((): RenderResult => renderResult = render(<ThankYou/>));

    it('renders', (): void => {
        const { container } = renderResult;
        expect(container).toBeTruthy();
    });

    it('check static props', async (): Promise<void> => {
        const staticProps: ThankYouStaticProps = await getStaticProps();
        expect(staticProps).toMatchObject({ props: {}, revalidate: 1 });
    });

    afterAll((): void => renderResult.unmount());
});
