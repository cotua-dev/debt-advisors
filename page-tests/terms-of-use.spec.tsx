import { render, RenderResult } from '@testing-library/react';
import TermsOfUse, { getStaticProps, TermsOfUseStaticProps } from '../pages/terms-of-use';

describe('Terms Of Use Page', (): void => {
    let renderResult: RenderResult;

    beforeAll((): RenderResult => renderResult = render(<TermsOfUse/>));

    it('renders', (): void => {
        const { container } = renderResult;
        expect(container).toBeTruthy();
    });

    it('check static props', async (): Promise<void> => {
        const staticProps: TermsOfUseStaticProps = await getStaticProps();
        expect(staticProps).toMatchObject({ props: {}, revalidate: 1 });
    });

    afterAll((): void => renderResult.unmount());
});
