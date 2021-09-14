import { render, RenderResult } from '@testing-library/react';
import { DoIQualifyOhio } from './index';

describe('DoIQualifyOhio Component', (): void => {
    let renderResult: RenderResult;

    beforeAll((): RenderResult => renderResult = render(<DoIQualifyOhio/>));

    test('renders', (): void => {
        const { container } = renderResult;
        expect(container.firstChild).toMatchSnapshot();
    });

    afterAll((): void => renderResult.unmount());
});
