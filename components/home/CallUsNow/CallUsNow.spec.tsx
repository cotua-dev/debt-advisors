import { render, RenderResult } from '@testing-library/react';
import { CallUsNow } from './index';

describe('CallUsNow Component', (): void => {
    let renderResult: RenderResult;

    beforeAll((): RenderResult => renderResult = render(<CallUsNow/>));

    test('renders', (): void => {
        const { container } = renderResult;
        expect(container.firstChild).toMatchSnapshot();
    });

    afterAll((): void => renderResult.unmount());
});
