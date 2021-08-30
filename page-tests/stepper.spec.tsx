import { render, RenderResult } from '@testing-library/react';
import StepperPage, { getStaticProps, StepperPageProps } from '../pages/stepper';

describe('Stepper Page', (): void => {
    let renderResult: RenderResult;

    beforeAll((): RenderResult => renderResult = render(<StepperPage/>));

    it('renders', (): void => {
        const { container } = renderResult;
        expect(container).toBeTruthy();
    });

    it('check static props', async (): Promise<void> => {
        const staticProps: StepperPageProps = await getStaticProps();
        expect(staticProps).toMatchObject({ props: {}, revalidate: 1 });
    });

    afterAll((): void => renderResult.unmount());
});
