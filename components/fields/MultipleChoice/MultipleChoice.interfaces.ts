import { Dispatch, SetStateAction } from 'react';
import { MultipleChoice, Step } from '../../Stepper/Stepper.interfaces';
import { StepperType } from '../../Stepper/Stepper.types';
import { SharedFieldProps } from '../shared.interfaces';

export interface MultipleChoiceFieldProps extends SharedFieldProps {
    choices: MultipleChoice[];
    nextStep: Function;
    setSteps: Dispatch<SetStateAction<Step[]>>;
    stepperType: StepperType,
};
