import styles from './MultipleChoice.module.scss';
import { MultipleChoiceFieldProps } from './MultipleChoice.interfaces';
import { MultipleChoice, MultipleChoiceValues, StepperModel } from '../../Stepper/Stepper.interfaces';

/**
 * Component for handling multiple choice fields
 * @param props Object containing the component properties
 * @returns JSX element markup
 */
export function MultipleChoiceField(props: MultipleChoiceFieldProps): JSX.Element {
    // Grab what we need from props
    const { model, field, setModel, nextStep, choices, steps, currentStep } = props;

    // We know there will only ever be one field for multiple choice
    const fieldName: keyof StepperModel = field[0];

    /**
     * Set the value in the model
     * @param value Number between 0 and 3 inclusive
     */
    function setValue(value: MultipleChoiceValues): void {
        // Build the new model using the first passed field
        const newModel: StepperModel = { ...model, [fieldName]: value };

        // Set the new model
        setModel(newModel);

        // Make the current step valid
        steps[currentStep].validity = true;

        // Update local storage
        // window.localStorage.setItem('model', JSON.stringify(newModel));

        // Go to the next step
        nextStep();
    }

    return (
        <div className={styles['multiple-choice-wrapper']}>
            {choices.map((choice: MultipleChoice) => (
                <button
                    className={`${styles['choice-button']} ${model[fieldName] === choice.value ? styles['active'] : ''}`}
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
