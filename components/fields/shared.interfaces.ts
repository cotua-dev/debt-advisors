import { Dispatch, SetStateAction } from 'react';
import { Step, StepperModel } from '../Stepper/Stepper.interfaces';

export interface SharedFieldProps {
    // field: keyof StepperModel;
    setField: Dispatch<SetStateAction<any>>;
    // model: StepperModel;
    steps: Step[];
    currentStep: number;
    setDisableNextButton?: Dispatch<SetStateAction<boolean>>;
};
