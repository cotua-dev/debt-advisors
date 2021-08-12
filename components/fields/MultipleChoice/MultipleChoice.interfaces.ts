import { MultipleChoice } from '../../Stepper/Stepper.interfaces';
import { SharedFieldProps } from '../shared.interfaces';

export interface MultipleChoiceFieldProps extends SharedFieldProps {
    choices: MultipleChoice[];
    nextStep: Function;
};
