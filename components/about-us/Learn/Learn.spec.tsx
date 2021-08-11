import { render, RenderResult } from '@testing-library/react';
import { Learn } from './index';

describe('Learn Component', (): void => {
    let renderResult: RenderResult;

    beforeAll((): RenderResult => renderResult = render(<Learn/>));

    test('renders', (): void => {
        const { container } = renderResult;
        expect(container.firstChild).toMatchSnapshot();
    });

    afterAll((): void => renderResult.unmount());
});
