import type { Step, StepperModel } from '../../Stepper/Stepper.interfaces';

export interface EmailProps {
    field: (keyof StepperModel)[];
    steps: Step[];
    currentStep: number;
};
