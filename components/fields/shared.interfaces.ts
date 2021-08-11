import { MultipleChoice, StepperModel } from '../Stepper/Stepper.interfaces';

export interface FieldProps {
    field: keyof StepperModel;
    choices?: MultipleChoice[];
};
