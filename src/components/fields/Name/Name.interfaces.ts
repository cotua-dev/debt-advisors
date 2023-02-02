import type { Dispatch, SetStateAction } from 'react';
import type { Step, StepperModel } from '../../Stepper/Stepper.interfaces';

export interface NameProps {
    field: (keyof StepperModel)[];
    steps: Step[];
    currentStep: number;
    setDisableNextButton?: Dispatch<SetStateAction<boolean>>;
    // firstName: string;
    // lastName: string;
    // setFirstName: Dispatch<SetStateAction<string>>;
    // setLastName: Dispatch<SetStateAction<string>>;
};
