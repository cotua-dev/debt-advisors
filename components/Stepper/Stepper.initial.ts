import { StepperModel, Step } from './Stepper.interfaces';
import { Questions } from './Stepper.enums';

export const initialStepperModel: StepperModel = {
    userPurpose: null,
    debtType: null,
    behindPaymentsType: null,
    fallBehindReason: null,
    monthlyIncomeAmount: '',
    unsecuredDebtAmount: '',
    zipCode: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    code: '',
    isMailer: false,
};

export const startingSteps: Step[] = [
    {
        question: Questions.UserPurpose,
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
        question: Questions.DebtType,
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
        question: Questions.BehindPaymentsType,
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
];

export const fallBehindReasonStep: Step[] = [
    {
        question: Questions.FallBehindReason,
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
];

export const userSteps: Step[] = [
    {
        question: Questions.ZipCode,
        validity: false,
        property: ['zipCode'],
        stepType: 'location',
        value: {},
    },
    {
        question: Questions.Name,
        validity: false,
        property: ['firstName', 'lastName'],
        stepType: 'name',
        value: {},
    },
    {
        question: Questions.Email,
        validity: false,
        property: ['email'],
        stepType: 'email',
        value: {},
    },
    {
        question: Questions.Phone,
        validity: false,
        property: ['phone'],
        stepType: 'phone',
        value: {},
    },
    {
        question: Questions.Code,
        validity: false,
        property: ['code'],
        stepType: 'verify',
        value: {},
    },
];

export const endingSteps: Step[] = [
    {
        question: Questions.MonthlyIncomeAmount,
        validity: false,
        property: ['monthlyIncomeAmount'],
        stepType: 'currency',
        value: {},
    },
    {
        question: Questions.UnsecuredDebtAmount,
        validity: false,
        property: ['unsecuredDebtAmount'],
        stepType: 'currency',
        value: {},
    },
];

export const initialSteps: Step[] = [
    ...startingSteps,
    ...endingSteps,
    ...userSteps,
];

export const initialNoUserSteps: Step[] = [
    ...startingSteps,
    ...endingSteps,
];
