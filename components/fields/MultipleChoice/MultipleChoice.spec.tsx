import { render, RenderResult } from '@testing-library/react';
import { MultipleChoiceField } from './index';

describe('MultipleChoiceField Component', (): void => {
    let renderResult: RenderResult;

    beforeAll((): RenderResult => renderResult = render(<MultipleChoiceField field="debtType" choices={[]}/>));

    test('renders', (): void => {
        const { container } = renderResult;
        expect(container.firstChild).toMatchSnapshot();
    });

    afterAll((): void => renderResult.unmount());
});
