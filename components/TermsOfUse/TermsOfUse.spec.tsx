import { render, RenderResult } from '@testing-library/react';
import { TermsOfUse } from './index';

describe('TermsOfUse Component', (): void => {
    let renderResult: RenderResult;

    beforeAll((): RenderResult => renderResult = render(<TermsOfUse/>));

    test('renders', (): void => {
        const { container } = renderResult;
        expect(container.firstChild).toMatchSnapshot();
    });

    afterAll((): void => renderResult.unmount());
});
