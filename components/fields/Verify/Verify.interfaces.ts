import { Dispatch, SetStateAction } from 'react';
import { Step } from '../../Stepper/Stepper.interfaces';

export interface VerifyProps {
    steps: Step[];
    currentStep: number;
    setDisableNextButton: Dispatch<SetStateAction<boolean>>;
    code: string;
    setCode: Dispatch<SetStateAction<string>>;
    disableVerifyField: boolean;
};
