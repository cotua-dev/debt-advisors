import { Dispatch, SetStateAction } from 'react';
import { Step } from '../../Stepper/Stepper.interfaces';

export interface NameProps {
    steps: Step[];
    currentStep: number;
    setDisableNextButton?: Dispatch<SetStateAction<boolean>>;
    firstName: string;
    lastName: string;
    setFirstName: Dispatch<SetStateAction<string>>;
    setLastName: Dispatch<SetStateAction<string>>;
};
