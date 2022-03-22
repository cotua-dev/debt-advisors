import { render, RenderResult } from '@testing-library/react';
import { ThankYouLayout } from './index';

describe('ThankYouLayout Component', (): void => {
    let renderResult: RenderResult;

    beforeAll((): RenderResult => renderResult = render(<ThankYouLayout/>));

    test('renders', (): void => {
        const { container } = renderResult;
        expect(container.firstChild).toMatchSnapshot();
    });

    afterAll((): void => renderResult.unmount());
});
