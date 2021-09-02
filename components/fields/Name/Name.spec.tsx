import { render, RenderResult } from '@testing-library/react';
import { Name } from './index';
import { NameProps } from './Name.interfaces';

describe('Name Component', (): void => {
    let renderResult: RenderResult;
    const props: NameProps = {
        steps: [],
        currentStep: 0,
        firstName: '',
        lastName: '',
        setFirstName: () => {},
        setLastName: () => {},
    };

    beforeAll((): RenderResult => renderResult = render(<Name {...props}/>));

    test('renders', (): void => {
        const { container } = renderResult;
        expect(container.firstChild).toMatchSnapshot();
    });

    afterAll((): void => renderResult.unmount());
});
