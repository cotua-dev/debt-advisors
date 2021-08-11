import { render, RenderResult } from '@testing-library/react';
import { Verify } from './index';

describe('Verify Component', (): void => {
    let renderResult: RenderResult;

    beforeAll((): RenderResult => renderResult = render(<Verify/>));

    test('renders', (): void => {
        const { container } = renderResult;
        expect(container.firstChild).toMatchSnapshot();
    });

    afterAll((): void => renderResult.unmount());
});
