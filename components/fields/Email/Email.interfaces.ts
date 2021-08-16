import { Dispatch, SetStateAction } from 'react';
import { Step } from '../../Stepper/Stepper.interfaces';

export interface EmailProps {
    steps: Step[];
    currentStep: number;
    setDisableNextButton: Dispatch<SetStateAction<boolean>>;
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
};
