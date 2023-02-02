import { action, MapStore } from "nanostores";
import type { WritableAtom } from "nanostores";
import { currentStep, currentStepCount, endingSteps, fallBehindReasonSteps, initialSteps, startingSteps, userSteps } from "./atoms/steps";
import type { Step, StepperModel } from "./interfaces";
import { Questions } from "./enums";
import { stepperModel } from "./maps";

export const fetchCurrentStep = action(initialSteps, "fetchCurrentStep", (store: WritableAtom<Step[]>): Step | undefined => {
    const steps: Step[] = store.get();
    const stepCount: number = currentStepCount.get();

    return steps[stepCount];
})

export const setFormField = action(stepperModel, "setFormField", (map: MapStore<StepperModel>, value: any) => {
    const thisStep: Step | undefined = fetchCurrentStep();

    if (thisStep !== undefined) {
        thisStep.property[0] !== undefined && map.setKey(thisStep.property[0], value);
        thisStep.value = { [thisStep.property[0] as string]: value };

        if (value !== null) {
            if (
                thisStep.stepType === "multiple-choice" ||
                thisStep.stepType === "currency" ||
                thisStep.stepType === "location"
            ) {
                thisStep.validity = true;
            }
        } else {
            thisStep.validity = false;
        }

        currentStep.set(thisStep);
    }
});

export const addFallBehindReasonSteps = action(initialSteps, "addFallBehindReasonSteps", (store: WritableAtom<Step[]>) => {
    const steps: Step[] = store.get();
    let updatedSteps: Step[] = [];
    const behindPaymentsTypeStep: Step | undefined = steps.find((step: Step) => step.question === Questions.BehindPaymentsType);

    if (behindPaymentsTypeStep !== undefined) {
        if (behindPaymentsTypeStep.value.behindPaymentsType as number < 2) {
            updatedSteps = [
                ...startingSteps.get(),
                ...fallBehindReasonSteps.get(),
                ...endingSteps.get(),
                ...userSteps.get(),
            ];
        } else {
            updatedSteps = [
                ...startingSteps.get(),
                ...endingSteps.get(),
                ...userSteps.get(),
            ];
        }
    }

    store.set(updatedSteps);
    return store.get();
});

export const nextStep = action(currentStepCount, "nextStep", (store: WritableAtom<number>) => {
    const allSteps = initialSteps.get();
    const currentStepCount = store.get();
    const model = stepperModel.get();
    const nextStepCount = currentStepCount + 1;

    if (allSteps.length > nextStepCount) {
        store.set(nextStepCount);
        currentStep.set(fetchCurrentStep());
    }

    const thisStep: Step | undefined = allSteps[currentStepCount];
    if (thisStep !== undefined) {
        if (thisStep.question === Questions.UnsecuredDebtAmount) {
            const unsecuredDebtAmountNumber: number = Number(model.unsecuredDebtAmount.replace("$", "").replaceAll(",", ""));
            localStorage.setItem("amount", unsecuredDebtAmountNumber.toString());

            // Disqualify if the debt is less than $5,000
            if (unsecuredDebtAmountNumber < 5000) {
                window.location.href = `${window.location.origin}/dq`;
            }
        }

        if (thisStep.question === Questions.ZipCode) {
            const stateAbbreviation: string | null = localStorage.getItem("state");
            if (stateAbbreviation !== null) {
                // Disqualify if the city is in North Dakota or South Carolina
                if (stateAbbreviation === "nd" || stateAbbreviation === "sc") {
                    window.location.href = `${window.location.origin}/dq`;
                }
            }
        }

        if (thisStep.question === Questions.BehindPaymentsType) {
            addFallBehindReasonSteps();
        }
    }

    return store.get();
});

export const previousStep = action(currentStepCount, "previousStep", (store: WritableAtom<number>) => {
    const stepCount = store.get();
    const previousStepCount = stepCount - 1;

    if (previousStepCount >= 0) {
        store.set(previousStepCount);
        currentStep.set(fetchCurrentStep());
    }

    return store.get();
});

export const disablePreviousStep = action(currentStepCount, "disablePreviousStep", (store: WritableAtom<number>): boolean => {
    return store.get() - 1 < 0;
});

export const disableNextStep = action(currentStepCount, "disableNextStep", (store: WritableAtom<number>): boolean => {
    const steps = initialSteps.get();
    const stepCount = store.get();
    const currentStep = fetchCurrentStep();

    // As long as the next step count is not greater than or equal to the number of steps
    // and the current step is not valid; disable the next step button
    return !(stepCount + 1 >= steps.length - 1) && !currentStep?.validity
});

export const disableSMSStep = action(currentStepCount, "disableSMSStep", (store: WritableAtom<number>): boolean => {
    let disableSMSButton = true;
    const stepCount = store.get();
    const steps = initialSteps.get();

    const currentStep = fetchCurrentStep();
    if (currentStep !== undefined) {
        const currentStepMatches = steps[stepCount]?.question === Questions.Phone && currentStep.question === Questions.Phone;
        disableSMSButton = !currentStep.validity && currentStepMatches;
    }

    return disableSMSButton;
});

export const disableVerifyStep = action(currentStepCount, "disableVerifyStep", (store: WritableAtom<number>): boolean => {
    let disableVerifyButton = true;
    const stepCount = store.get();
    const steps = initialSteps.get();

    const currentStep = fetchCurrentStep();
    if (currentStep !== undefined) {
        const currentStepMatches = steps[stepCount]?.question === Questions.Code && currentStep.question === Questions.Code;
        disableVerifyButton = !currentStep.validity && currentStepMatches;
    }

    return disableVerifyButton;
});
