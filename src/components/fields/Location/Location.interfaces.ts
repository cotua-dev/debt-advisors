import type { Dispatch, SetStateAction } from 'react';
import type { Step, StepperModel } from '../../Stepper/Stepper.interfaces';

export interface LocationProps {
    field: (keyof StepperModel)[];
    // setModel: Dispatch<SetStateAction<StepperModel>>;
    model: StepperModel;
    steps: Step[];
    currentStep: number;
    setDisableNextButton?: Dispatch<SetStateAction<boolean>>;
    // zipCode: string;
    // setZipCode: Dispatch<SetStateAction<string>>;
    // setUSState: Dispatch<SetStateAction<string>>;
};
