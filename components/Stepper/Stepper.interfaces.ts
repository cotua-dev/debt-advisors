import { MultipleChoiceValues, StepTypes } from './Stepper.types';
import { UserPurpose, DebtType, BehindPaymentsType, FallBehindReason } from './Stepper.enums';

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
    monthlyIncomeAmount: string;
    unsecuredDebtAmount: string;
    zipCode: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
};

export interface Step {
    question: string;
    validity: boolean;
    property: (keyof StepperModel)[];
    stepType: StepTypes;
    choices?: MultipleChoice[];
    value: { [StepperModelKey in keyof StepperModel]?: null | string | number; };
};
