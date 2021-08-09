import { render, RenderResult } from '@testing-library/react';
import { DoIQualify } from './index';

describe('DoIQualify Component', (): void => {
    let renderResult: RenderResult;

    beforeAll((): RenderResult => renderResult = render(<DoIQualify/>));

    test('renders', (): void => {
        const { container } = renderResult;
        expect(container.firstChild).toMatchSnapshot();
    });

    afterAll((): void => renderResult.unmount());
});
