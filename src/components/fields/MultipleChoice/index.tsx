import { useStore } from '@nanostores/react';
import styles from './MultipleChoice.module.scss';
import type { MultipleChoice, StepperModel } from '../../Stepper/Stepper.interfaces';
import type { MultipleChoiceValues } from '../../Stepper/Stepper.types';
import { stepperModel } from '@stores/stepper/maps';
import { fetchCurrentStep, nextStep, setFormField } from '@stores/stepper/actions';

/**
 * Component for handling multiple choice fields
 * @param props Object containing the component properties
 * @returns JSX element markup
 */
export function MultipleChoiceField(): JSX.Element {
    const model = useStore(stepperModel);
    const currentStep = fetchCurrentStep();

    /**
     * Set the value in the model
     * @param value Number between 0 and 3 inclusive
     */
    function setValue(value: MultipleChoiceValues): void {
        /*
        if (fieldName !== undefined) {
            stepperModel.setKey(fieldName, value);
        }

        // Build the new model using the first passed field
        // const newModel: StepperModel | boolean = fieldName !== undefined && { ...model, [fieldName]: value };
        const thisStep = steps[currentStep];

        // if (typeof newModel !== "boolean") {
        //     // Set the new model
        //     setModel(newModel);
        // }

        if (thisStep !== undefined) {
            // Make the current step valid
            thisStep.validity = true;

            // Check to see if we are at the behind payments type question
            if (thisStep.question === Questions.BehindPaymentsType) {
                let stepsToAdd: Step[] = [];

                // If 'No' is not selected, then add the fall behind reason question
                if (value !== 2) {
                    stepsToAdd = [
                        ...startingSteps,
                        ...fallBehindReasonStep,
                        ...endingSteps,
                    ];
                } else {
                    // Otherwise, keep the fall behind reason question out
                    stepsToAdd = [
                        ...startingSteps,
                        ...endingSteps,
                    ];

                    // Reset the fall behind reason value and set the behind payments type value
                    setModel({
                        ...model,
                        behindPaymentsType: value,
                        fallBehindReason: null,
                    });
                }

                if (props.stepperType === 'full') {
                    stepsToAdd = [...stepsToAdd, ...userSteps];
                }

                setSteps(stepsToAdd);
            }
        }
        */
        setFormField(value);

        // Update local storage
        // window.localStorage.setItem('model', JSON.stringify(newModel));

        // Go to the next step
        nextStep();
    }

    return (
        <div className={styles['multiple-choice-wrapper']}>
            {currentStep !== undefined && currentStep.choices?.map((choice: MultipleChoice) => (
                <button
                    className={`${styles['choice-button']} ${model[currentStep.property[0] as keyof StepperModel] === choice.value ? styles['active'] : ''}`}
                    key={choice.value}
                    type="button"
                    onClick={() => setValue(choice.value)}
                >
                    <strong className={styles['choice-text']}>
                        {choice.label}
                    </strong>
                </button>
            ))}
        </div>
    );
}
