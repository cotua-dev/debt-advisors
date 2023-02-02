import { atom } from "nanostores";
import type { Step } from "../interfaces";
import { Questions } from "../enums";
import { behindPaymentsTypeChoices, debtTypeChoices, fallBehindReasonChoices, userPurposeChoices } from "./choices";

export const currentStep = atom<Step | undefined>({
    question: Questions.UserPurpose,
    validity: false,
    property: ['userPurpose'],
    stepType: 'multiple-choice',
    choices: userPurposeChoices.get(),
    value: {},
});

export const startingSteps = atom<Step[]>([
    {
        question: Questions.UserPurpose,
        validity: false,
        property: ['userPurpose'],
        stepType: 'multiple-choice',
        choices: userPurposeChoices.get(),
        value: {},
    },
    {
        question: Questions.DebtType,
        validity: false,
        property: ['debtType'],
        stepType: 'multiple-choice',
        choices: debtTypeChoices.get(),
        value: {},
    },
    {
        question: Questions.BehindPaymentsType,
        validity: false,
        property: ['behindPaymentsType'],
        stepType: 'multiple-choice',
        choices: behindPaymentsTypeChoices.get(),
        value: {},
    },
]);

export const fallBehindReasonSteps = atom<Step[]>([
    {
        question: Questions.FallBehindReason,
        validity: false,
        property: ['fallBehindReason'],
        stepType: 'multiple-choice',
        choices: fallBehindReasonChoices.get(),
        value: {},
    },
]);

export const userSteps = atom<Step[]>([
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
]);

export const endingSteps = atom<Step[]>([
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
]);

export const initialSteps = atom<Step[]>([
    ...startingSteps.get(),
    ...endingSteps.get(),
    ...userSteps.get(),
]);

export const initialNoUserSteps = atom<Step[]>([
    ...startingSteps.get(),
    ...endingSteps.get(),
]);

export const currentStepCount = atom<number>(0);
