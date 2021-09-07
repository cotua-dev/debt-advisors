import { MultipleChoiceValues, StepTypes } from './Stepper.types';
import { UserPurpose, DebtType, BehindPaymentsType, FallBehindReason, Questions } from './Stepper.enums';
import { Dispatch, SetStateAction } from '.pnpm/@types+react@17.0.15/node_modules/@types/react';

export interface MultipleChoice {
    label: string;
    value: MultipleChoiceValues;
};

export interface StepperModel {
    userPurpose: MultipleChoiceValues | null;
    debtType: MultipleChoiceValues | null;
    behindPaymentsType: MultipleChoiceValues | null;
    fallBehindReason: MultipleChoiceValues | null;
    monthlyIncomeAmount: string;
    unsecuredDebtAmount: string;
    zipCode: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    code: string;
};

export interface ParsedStepperModel {
    userPurpose: UserPurpose;
    debtType: DebtType;
    behindPaymentsType: BehindPaymentsType;
    fallBehindReason: FallBehindReason;
    monthlyIncomeAmount: number;
    unsecuredDebtAmount: number;
    zipCode: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
};

export interface Step {
    question: Questions;
    validity: boolean;
    property?: any;
    dispatchMethod?: Dispatch<SetStateAction<any>>;
    stepType: StepTypes;
    choices?: MultipleChoice[]; // necessary for multiple choice
    renderFn?: () => JSX.Element;
};

// export interface Step {
//     question: Questions;
//     validity: boolean;
//     property: (keyof StepperModel)[];
//     stepType: StepTypes;
//     choices?: MultipleChoice[];
//     value: { [StepperModelKey in keyof StepperModel]?: null | string | number; };
// };
