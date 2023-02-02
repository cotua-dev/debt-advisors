import type { Dispatch, SetStateAction } from 'react';
import type { Step, StepperModel } from '../../Stepper/Stepper.interfaces';

export interface VerifyProps {
    field: (keyof StepperModel)[];
    steps: Step[];
    currentStep: number;
    setDisableNextButton: Dispatch<SetStateAction<boolean>>;
    // code: string;
    // setCode: Dispatch<SetStateAction<string>>;
    disableVerifyField: boolean;
};
