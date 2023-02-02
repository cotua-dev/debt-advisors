import type { Dispatch, SetStateAction } from 'react';
import type { Step, StepperModel } from '../../Stepper/Stepper.interfaces';

export interface PhoneProps {
    field: (keyof StepperModel)[];
    steps: Step[];
    currentStep: number;
    setDisableNextButton: Dispatch<SetStateAction<boolean>>;
    // phone: string;
    // setPhone: Dispatch<SetStateAction<string>>;
};
