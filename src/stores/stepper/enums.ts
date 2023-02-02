export enum UserPurpose {
    ReduceYourMonthlyPayments = 80,
    ConsolidateYourPayments = 81,
    ReduceYourInterestRates = 82,
    AllOfTheAbove = 83,
};

export enum DebtType {
    CreditCards = 84,
    PersonalLoans = 85,
    MedicalBills = 86,
    AllOfTheAbove = 87,
};

export enum BehindPaymentsType {
    YesMore60 = 88,
    YesMore30 = 89,
    No = 90,
};

export enum FallBehindReason {
    LossOfIncome = 91,
    IncreasedCostOfLiving = 92,
    UnexpectedExpenses = 93,
    MedicalHardship = 94,
};

export enum Questions {
    UserPurpose = 'What are you looking to do?',
    DebtType = 'What kind of debts do you have?',
    BehindPaymentsType = 'Are you behind on your payments?',
    FallBehindReason = 'What made you fall behind?',
    MonthlyIncomeAmount = 'What is your monthly income?',
    UnsecuredDebtAmount = 'What is the total amount of your unsecured debt?',
    ZipCode = 'What city are you in?',
    Name = 'What is your name?',
    Email = 'What is your email?',
    Phone = 'Please provide your phone number for verification',
    Code = 'Please provide the code sent to your phone number',
};
