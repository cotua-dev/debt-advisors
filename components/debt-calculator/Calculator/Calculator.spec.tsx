import { render, RenderResult } from '@testing-library/react';
import { Calculator } from './index';

describe('Calculator Component', (): void => {
    let renderResult: RenderResult;

    beforeAll((): RenderResult => renderResult = render(<Calculator/>));

    test('renders', (): void => {
        const { container } = renderResult;
        expect(container.firstChild).toMatchSnapshot();
    });

    afterAll((): void => renderResult.unmount());
});
