import { cleanup, render, RenderResult } from '@testing-library/react';
import { Stepper } from './index';

describe('Stepper Component', (): void => {
    let renderResult: RenderResult;

    beforeEach((): RenderResult => renderResult = render(<Stepper/>));

    test('renders', (): void => {
        const { container } = renderResult;
        expect(container.firstChild).toMatchSnapshot();
    });

    afterEach(cleanup);
});
