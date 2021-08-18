import { Dispatch, SetStateAction } from 'react';
import { Step } from '../../Stepper/Stepper.interfaces';

export interface LocationProps {
    steps: Step[];
    currentStep: number;
    setDisableNextButton?: Dispatch<SetStateAction<boolean>>;
    zipCode: string;
    setZipCode: Dispatch<SetStateAction<string>>;
    setUSState: Dispatch<SetStateAction<string>>;
};
