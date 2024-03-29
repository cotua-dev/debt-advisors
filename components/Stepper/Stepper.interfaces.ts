import { MultipleChoiceValues, StepperType, StepTypes } from './Stepper.types';
import { UserPurpose, DebtType, BehindPaymentsType, FallBehindReason, Questions } from './Stepper.enums';
import { MailerCheckResponseBody } from '../MailerCheck/MailerCheck.interfaces';

export interface MultipleChoice {
    label: string;
    value: MultipleChoiceValues;
};

export interface MailerModel {
    referenceId: string;
    middleInitial: string;
    suffix: string;
    address: string;
    city: string;
    stateAbbreviation: string;
    crrt: string;
    barcode: string;
    county: string;
    estimatedDebt: number;
    settled: number;
    newPayment: number;
    tier: string;
    segment: string;
    drop: string;
    tollFreeNumber: string;
    spanishTollFreeNumber: string;
    noticeDate: string;
    url: string;
    stateFull: string;
};

export interface StepperModel extends Partial<MailerModel> {
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
    isMailer: boolean;
};

export interface AdsFields {
    utm_medium?: string;
    utm_term?: string;
    utm_content?: string;
    utm_source?: string;
    utm_campaign?: string;
    gclid?: string;
    fbclid?: string;
    placement?: string;
};

export interface ParsedStepperModel extends Partial<MailerModel>, Partial<AdsFields> {
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
    site: string;
    isMailer: boolean;
    thankYouId: string;
};

export interface Step {
    question: Questions;
    validity: boolean;
    property: (keyof StepperModel)[];
    stepType: StepTypes;
    choices?: MultipleChoice[];
    value: { [StepperModelKey in keyof StepperModel]?: null | string | number; };
};

export interface StepperProps {
    'stepper-type': StepperType,
    'user-info'?: MailerCheckResponseBody,
};
