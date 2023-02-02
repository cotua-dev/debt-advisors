import { map } from "nanostores";
import type { StepperModel } from "./interfaces"

export const stepperModel = map<StepperModel>({
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
});
