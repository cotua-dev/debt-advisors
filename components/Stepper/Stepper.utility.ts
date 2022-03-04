import { UserPurpose, DebtType, BehindPaymentsType, FallBehindReason, Questions } from './Stepper.enums';
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
 * @returns Number minus commas and dollar sign (Ex: "10000000.00")
 */
export function parseCurrencyValue(unparsedCurrencyValue: string): number {
    return Number((unparsedCurrencyValue.replace(',', '')).replace('$', ''));
}

/**
 * Parse the phone number so it is acceptable for submission
 * @param unparsedPhoneNumber String containing a phone number (Ex: "+1 234 567 8901")
 * @returns Parsed string that is acceptable for submission (Ex: "+12345678901")
 */
export function parsePhoneNumber(unparsedPhoneNumber: string): string {
    return unparsedPhoneNumber
        .split('')
        .filter((letter: string) => (letter !== ' '))
        .join('');
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
        phone: parsePhoneNumber(unparsedModel.phone),
        site: window.location.href,
        isMailer: unparsedModel.isMailer,
    };
}

/**
 * Send a request containing a phone number to receive a code via SMS for verification
 * @param phone String containing a phone number
 * @returns Promise containing the response object or undefined
 */
export async function sendSMS(phone: string): Promise<Response | undefined> {
    try {
        // Make sure `phone` is not just an empty string
        if (phone !== '') {
            // Remove spaces from `phone` to make it E.164 compliant
            const e164PhoneNumber: string = parsePhoneNumber(phone);

            // Send a request with the E.164 phone number that will send an SMS to the provided phone number
            // with a 6 digit code for verification
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/TwilioVerifyPhoneNumber`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phoneNumber: e164PhoneNumber }),
            });

            // Return the response
            return response;
        }
    } catch(sendSMSError: unknown) {
        console.error({ sendSMSError });
        throw new Error(sendSMSError as string);
    }
}

/**
 * Send a request containing the phone number and code for verification
 * @param phone String containing a phone number
 * @param code String containing a code
 * @returns Promise containing the response object or undefined
 */
export async function verifySMSCode(phone: string, code: string): Promise<Response | undefined> {
    try {
        // Make sure `phone` and `code` are not just empty strings
        if (phone !== '' && code !== '') {
            // Remove spaces from `phone` to make it E.164 compliant
            const e164PhoneNumber: string = parsePhoneNumber(phone);

            // Send a request with the E.164 phone number and code for verification
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/TwilioVerifyCode`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phoneNumber: e164PhoneNumber, code }),
            });

            // Return the response
            return response;
        }
    } catch(verifySMSCodeError: unknown) {
        console.error({ verifySMSCodeError });
        throw new Error(verifySMSCodeError as string);
    }
}

/**
 * Send request to add a new contact and deal in Bitrix
 * @param data Object containing already parsed data
 * @returns Promise containing the response object or undefined
 */
export async function addBitrixContactDeal(data: ParsedStepperModel): Promise<Response | undefined> {
    try {
        // Kick off request using the passed data object
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/DAABitrix`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        // Return the response object
        return response;
    } catch(addBitrixContactDealError: unknown) {
        console.error({ addBitrixContactDealError });
        throw new Error(addBitrixContactDealError as string);
    }
}
