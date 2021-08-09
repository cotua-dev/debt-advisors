import { render, RenderResult } from '@testing-library/react';
import { WhatWeDo } from './index';

describe('WhatWeDo Component', (): void => {
    let renderResult: RenderResult;

    beforeAll((): RenderResult => renderResult = render(<WhatWeDo/>));

    test('renders', (): void => {
        const { container } = renderResult;
        expect(container.firstChild).toMatchSnapshot();
    });

    afterAll((): void => renderResult.unmount());
});
