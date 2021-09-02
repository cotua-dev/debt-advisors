import { render, RenderResult } from '@testing-library/react';
import { Phone } from './index';
import { PhoneProps } from './Phone.interfaces';

describe('Phone Component', (): void => {
    let renderResult: RenderResult;
    const props: PhoneProps = {
        steps: [],
        currentStep: 0,
        setDisableNextButton: () => {},
        phone: '',
        setPhone: () => {},
    };

    beforeAll((): RenderResult => renderResult = render(<Phone {...props}/>));

    test('renders', (): void => {
        const { container } = renderResult;
        expect(container.firstChild).toMatchSnapshot();
    });

    afterAll((): void => renderResult.unmount());
});
