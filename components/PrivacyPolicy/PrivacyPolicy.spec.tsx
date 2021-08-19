import { render, RenderResult } from '@testing-library/react';
import { PrivacyPolicy } from './index';

describe('PrivacyPolicy Component', (): void => {
    let renderResult: RenderResult;

    beforeAll((): RenderResult => renderResult = render(<PrivacyPolicy/>));

    test('renders', (): void => {
        const { container } = renderResult;
        expect(container.firstChild).toMatchSnapshot();
    });

    afterAll((): void => renderResult.unmount());
});
