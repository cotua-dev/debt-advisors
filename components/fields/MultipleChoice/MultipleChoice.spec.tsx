import { render, RenderResult } from '@testing-library/react';
import { StepperModel } from '../../Stepper/Stepper.interfaces';
import { initialStepperModel } from '../../Stepper/Stepper.initial';
import { MultipleChoiceField } from './index';
import { MultipleChoiceFieldProps } from './MultipleChoice.interfaces';

describe('MultipleChoiceField Component', (): void => {
    let renderResult: RenderResult;
    const props: MultipleChoiceFieldProps = {
        field: ['debtType'],
        choices: [],
        nextStep: () => {},
        setModel: () => {},
        model: initialStepperModel,
        currentStep: 0,
        steps: [],
    };

    beforeAll((): RenderResult => renderResult = render(<MultipleChoiceField {...props}/>));

    test('renders', (): void => {
        const { container } = renderResult;
        expect(container.firstChild).toMatchSnapshot();
    });

    afterAll((): void => renderResult.unmount());
});
