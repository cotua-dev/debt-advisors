import { atom } from "nanostores";
import type { MultipleChoice } from "../interfaces";

export const userPurposeChoices = atom<MultipleChoice[]>([
    { label: 'Reduce your monthly payments', value: 0 },
    { label: 'Consolidate your payments', value: 1 },
    { label: 'Reduce your interest rates', value: 2 },
    { label: 'All of the above', value: 3 },
]);

export const debtTypeChoices = atom<MultipleChoice[]>([
    { label: 'Credit cards', value: 0 },
    { label: 'Personal loans', value: 1 },
    { label: 'Medical bills', value: 2 },
    { label: 'All of the above', value: 3 },
]);

export const behindPaymentsTypeChoices = atom<MultipleChoice[]>([
    { label: 'Yes - more than 60 days', value: 0 },
    { label: 'Yes - more than 30 days', value: 1 },
    { label: 'No', value: 2 },
]);

export const fallBehindReasonChoices = atom<MultipleChoice[]>([
    { label: 'Loss of income', value: 0 },
    { label: 'Increase in cost of living', value: 1 },
    { label: 'Unexpected expenses', value: 2 },
    { label: 'Medical hardship', value: 3 },
]);
