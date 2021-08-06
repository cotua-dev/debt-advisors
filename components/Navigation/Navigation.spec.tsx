import { render, RenderResult } from '@testing-library/react';
import { Navigation } from './index';

describe('Navigation Component', (): void => {
    let renderResult: RenderResult;

    beforeAll((): RenderResult => renderResult = render(<Navigation/>));

    test('renders', (): void => {
        const { container } = renderResult;
        expect(container.firstChild).toMatchSnapshot();
    });

    afterAll((): void => renderResult.unmount());
});
