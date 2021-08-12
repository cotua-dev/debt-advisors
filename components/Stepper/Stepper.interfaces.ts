export type MultipleChoiceValues = 0 | 1 | 2 | 3;

export type StepTypes = 'multiple-choice' | 'currency' | 'location' | 'phone' | 'verify' | 'name' | 'email';

export interface MultipleChoice {
    label: string;
    value: MultipleChoiceValues;
};

export interface StepperModel {
    userPurpose: MultipleChoiceValues | null;
    debtType: MultipleChoiceValues | null;
    behindPaymentsType: MultipleChoiceValues | null;
    fallBehindReason: MultipleChoiceValues | null;
    monthlyIncomeAmount: number;
    unsecuredDebtAmount: number;
    zipCode: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    code: string;
};

export interface Step {
    question: string;
    validity: boolean;
    property: (keyof StepperModel)[];
    stepType: StepTypes;
    choices?: MultipleChoice[];
    value: { [StepperModelKey in keyof StepperModel]?: null | string | number; };
};

export const initialStepperModel: StepperModel = {
    userPurpose: null,
    debtType: null,
    behindPaymentsType: null,
    fallBehindReason: null,
    monthlyIncomeAmount: 0,
    unsecuredDebtAmount: 0,
    zipCode: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    code: '',
};

export const initialSteps: Step[] = [
    {
        question: 'What are you looking to do?',
        validity: false,
        property: ['userPurpose'],
        stepType: 'multiple-choice',
        choices: [
            { label: 'Reduce your monthly payments', value: 0 },
            { label: 'Consolidate your payments', value: 1 },
            { label: 'Reduce your interest rates', value: 2 },
            { label: 'All of the above', value: 3 },
        ],
        value: {},
    },
    {
        question: 'What kind of debts do you have?',
        validity: false,
        property: ['debtType'],
        stepType: 'multiple-choice',
        choices: [
            { label: 'Credit cards', value: 0 },
            { label: 'Personal loans', value: 1 },
            { label: 'Medical bills', value: 2 },
            { label: 'All of the above', value: 3 },
        ],
        value: {},
    },
    {
        question: 'Are you behind on your payments?',
        validity: false,
        property: ['behindPaymentsType'],
        stepType: 'multiple-choice',
        choices: [
            { label: 'Yes - more than 60 days', value: 0 },
            { label: 'Yes - more than 30 days', value: 1 },
            { label: 'No', value: 2 },
        ],
        value: {},
    },
    {
        question: 'What made you fall behind?',
        validity: false,
        property: ['fallBehindReason'],
        stepType: 'multiple-choice',
        choices: [
            { label: 'Loss of income', value: 0 },
            { label: 'Increase in cost of living', value: 1 },
            { label: 'Unexpected expenses', value: 2 },
            { label: 'Medical hardship', value: 3 },
        ],
        value: {},
    },
    {
        question: 'What is your monthly income?',
        validity: false,
        property: ['monthlyIncomeAmount'],
        stepType: 'currency',
        value: {},
    },
    {
        question: 'What is the total amount of your unsecured debt?',
        validity: false,
        property: ['unsecuredDebtAmount'],
        stepType: 'currency',
        value: {},
    },
    {
        question: 'What city are you in?',
        validity: false,
        property: ['zipCode'],
        stepType: 'location',
        value: {},
    },
    {
        question: 'What is your name?',
        validity: false,
        property: ['firstName', 'lastName'],
        stepType: 'name',
        value: {},
    },
    {
        question: 'What is your email?',
        validity: false,
        property: ['email'],
        stepType: 'email',
        value: {},
    },
    {
        question: 'Please provide your mobile number for verification',
        validity: false,
        property: ['phone'],
        stepType: 'phone',
        value: {},
    },
    {
        question: 'Please verify the code sent to your mobile number',
        validity: false,
        property: ['code'],
        stepType: 'verify',
        value: {},
    },
];
