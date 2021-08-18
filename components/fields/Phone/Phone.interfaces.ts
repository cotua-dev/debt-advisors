import { Dispatch, SetStateAction } from 'react';
import { Step } from '../../Stepper/Stepper.interfaces';

export interface PhoneProps {
    steps: Step[];
    currentStep: number;
    setDisableNextButton: Dispatch<SetStateAction<boolean>>;
    phone: string;
    setPhone: Dispatch<SetStateAction<string>>;
};
