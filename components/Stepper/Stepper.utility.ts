import { UserPurpose, DebtType, BehindPaymentsType, FallBehindReason } from './Stepper.enums';
import { ParsedStepperModel, StepperModel } from './Stepper.interfaces';
import { MultipleChoiceValues } from './Stepper.types';

/**
 * Parse the user purpose multiple-choice field value
 * @param selection Number between 0 - 3 inclusive
 * @returns A number depending on the selection
 */
export function parseUserPurpose(selection: MultipleChoiceValues | null): UserPurpose {
    switch(selection) {
        case 0:
            return UserPurpose.ReduceYourMonthlyPayments;
        case 1:
            return UserPurpose.ConsolidateYourPayments;
        case 2:
            return UserPurpose.ReduceYourInterestRates;
        case 3:
            return UserPurpose.AllOfTheAbove;
        default:
            return UserPurpose.ReduceYourMonthlyPayments;
    }
}

/**
 * Parse the debt type multiple-choice field value
 * @param selection Number between 0 - 3 inclusive
 * @returns A number depending on the selection
 */
export function parseDebtType(selection: MultipleChoiceValues | null): DebtType {
    switch(selection) {
        case 0:
            return DebtType.CreditCards;
        case 1:
            return DebtType.PersonalLoans;
        case 2:
            return DebtType.MedicalBills;
        case 3:
            return DebtType.AllOfTheAbove;
        default:
            return DebtType.CreditCards;
    }
}

/**
 * Parse the behind payments type multiple-choice field value
 * @param selection Number between 0 - 3 inclusive
 * @returns A number depending on the selection
 */
export function parseBehindPaymentsType(selection: MultipleChoiceValues | null): BehindPaymentsType {
    switch(selection) {
        case 0:
            return BehindPaymentsType.YesMore60;
        case 1:
            return BehindPaymentsType.YesMore30;
        case 2:
            return BehindPaymentsType.No;
        default:
            return BehindPaymentsType.YesMore60;
    }
}

/**
 * Parse the fall behind reason multiple-choice field value
 * @param selection Number between 0 - 3 inclusive
 * @returns A number depending on the selection
 */
export function parseFallBehindReason(selection: MultipleChoiceValues | null): FallBehindReason {
    switch(selection) {
        case 0:
            return FallBehindReason.LossOfIncome;
        case 1:
            return FallBehindReason.IncreasedCostOfLiving;
        case 2:
            return FallBehindReason.UnexpectedExpenses;
        case 3:
            return FallBehindReason.MedicalHardship;
        default:
            return FallBehindReason.LossOfIncome;
    }
}

/**
 * Remove the dollar sign and commas from currency value
 * @param unparsedCurrencyValue String containing a dollar amount (Ex: "$10,000,000.00")
 * @returns String minus commas and dollar sign (Ex: "10000000.00")
 */
export function parseCurrencyValue(unparsedCurrencyValue: string): string {
    return (unparsedCurrencyValue.replace(',', '')).replace('$', '');
}

/**
 * Parse the model so its values are acceptable for submission
 * @param unparsedModel Object containing values not acceptable for submission
 * @returns Object containing equivalent acceptable values
 */
export function parseModel(unparsedModel: StepperModel): ParsedStepperModel {
    return {
        userPurpose: parseUserPurpose(unparsedModel.userPurpose),
        debtType: parseDebtType(unparsedModel.debtType),
        behindPaymentsType: parseBehindPaymentsType(unparsedModel.behindPaymentsType),
        fallBehindReason: parseFallBehindReason(unparsedModel.fallBehindReason),
        monthlyIncomeAmount: parseCurrencyValue(unparsedModel.monthlyIncomeAmount),
        unsecuredDebtAmount: parseCurrencyValue(unparsedModel.unsecuredDebtAmount),
        zipCode: unparsedModel.zipCode,
        firstName: unparsedModel.firstName,
        lastName: unparsedModel.lastName,
        email: unparsedModel.email,
        phone: unparsedModel.phone,
    };
}
