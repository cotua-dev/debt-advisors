import { render, RenderResult } from '@testing-library/react';
import PrivacyPolicy, { getStaticProps, PrivacyPolicyStaticProps } from '../pages/privacy-policy';

describe('Privacy Policy Page', (): void => {
    let renderResult: RenderResult;

    beforeAll((): RenderResult => renderResult = render(<PrivacyPolicy/>));

    it('renders', (): void => {
        const { container } = renderResult;
        expect(container).toBeTruthy();
    });

    it('check static props', async (): Promise<void> => {
        const staticProps: PrivacyPolicyStaticProps = await getStaticProps();
        expect(staticProps).toMatchObject({ props: {}, revalidate: 1 });
    });

    afterAll((): void => renderResult.unmount());
});
