import { Dispatch, SetStateAction } from '.pnpm/@types+react@17.0.15/node_modules/@types/react';
import { MultipleChoice, Step } from '../../Stepper/Stepper.interfaces';
import { SharedFieldProps } from '../shared.interfaces';

export interface MultipleChoiceFieldProps extends SharedFieldProps {
    choices: MultipleChoice[];
    nextStep: Function;
    setSteps: Dispatch<SetStateAction<Step[]>>;
};
