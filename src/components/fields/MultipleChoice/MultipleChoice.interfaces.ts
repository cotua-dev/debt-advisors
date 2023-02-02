import type { MultipleChoice } from '../../Stepper/Stepper.interfaces';
import type { StepperType } from '../../Stepper/Stepper.types';
import type { SharedFieldProps } from '../shared.interfaces';

export interface MultipleChoiceFieldProps extends SharedFieldProps {
    choices: MultipleChoice[];
    stepperType: StepperType,
};
