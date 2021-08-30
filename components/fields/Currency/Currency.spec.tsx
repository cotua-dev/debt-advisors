import { render, RenderResult } from '@testing-library/react';
import { SharedFieldProps } from '../shared.interfaces';
import { initialStepperModel } from '../../Stepper/Stepper.initial';
import { Currency } from './index';

describe('Currency Component', (): void => {
    let renderResult: RenderResult;
    const props: SharedFieldProps = {
        field: ['behindPaymentsType'],
        setModel: () => {},
        model: initialStepperModel,
        steps: [],
        currentStep: 0,
    };

    beforeAll((): RenderResult => renderResult = render(<Currency {...props}/>));

    test('renders', (): void => {
        const { container } = renderResult;
        expect(container.firstChild).toMatchSnapshot();
    });

    afterAll((): void => renderResult.unmount());
});
