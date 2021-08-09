import { render, RenderResult } from '@testing-library/react';
import { Steps } from './index';

describe('Steps Component', (): void => {
    let renderResult: RenderResult;

    beforeAll((): RenderResult => renderResult = render(<Steps/>));

    test('renders', (): void => {
        const { container } = renderResult;
        expect(container.firstChild).toMatchSnapshot();
    });

    afterAll((): void => renderResult.unmount());
});
