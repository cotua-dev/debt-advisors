import { MultipleChoice } from '../../Stepper/Stepper.interfaces';
import { MultipleChoiceValues } from '../../Stepper/Stepper.types';
import { SharedFieldProps } from '../shared.interfaces';

export interface MultipleChoiceFieldProps extends SharedFieldProps {
    field: MultipleChoiceValues | null;
    choices: MultipleChoice[];
    nextStep: Function;
};
