import { render, RenderResult } from '@testing-library/react';
import Options, { getStaticProps, OptionsStaticProps } from '../pages/options';

describe('Options Page', (): void => {
    let renderResult: RenderResult;

    beforeAll((): RenderResult => renderResult = render(<Options/>));

    it('renders', (): void => {
        const { container } = renderResult;
        expect(container).toBeTruthy();
    });

    it('check static props', async (): Promise<void> => {
        const staticProps: OptionsStaticProps = await getStaticProps();
        expect(staticProps).toMatchObject({ props: {}, revalidate: 1 });
    });

    afterAll((): void => renderResult.unmount());
});
