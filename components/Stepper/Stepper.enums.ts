export enum UserPurpose {
    ReduceYourMonthlyPayments = 69,
    ConsolidateYourPayments = 71,
    ReduceYourInterestRates = 73,
    AllOfTheAbove = 75,
};

export enum DebtType {
    CreditCards = 77,
    PersonalLoans = 79,
    MedicalBills = 81,
    AllOfTheAbove = 83,
};

export enum BehindPaymentsType {
    YesMore60 = 85,
    YesMore30 = 87,
    No = 89,
};

export enum FallBehindReason {
    LossOfIncome = 91,
    IncreasedCostOfLiving = 93,
    UnexpectedExpenses = 95,
    MedicalHardship = 97,
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
