import { Dispatch, SetStateAction } from 'react';
import { Step, StepperModel } from '../Stepper/Stepper.interfaces';

export interface SharedFieldProps {
    field: (keyof StepperModel)[];
    setModel: Dispatch<SetStateAction<StepperModel>>;
    model: StepperModel;
    steps: Step[];
    currentStep: number;
    setDisableNextButton?: Dispatch<SetStateAction<boolean>>;
};
