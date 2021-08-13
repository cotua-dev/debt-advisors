import { useState, FormEvent } from 'react';
import styles from './Currency.module.scss';
import { SharedFieldProps } from '../shared.interfaces';
import { StepperModel } from '../../Stepper/Stepper.interfaces';

export function Currency(props: SharedFieldProps): JSX.Element {
    // Grab what we need from props
    const { model, field, setModel, steps, currentStep, setDisableNextButton } = props;

    const [showError, setShowError] = useState(false);
    const [error, setError] = useState('');

    function handleInputListenerEvent(event: FormEvent<HTMLInputElement>, fieldName: keyof StepperModel): void {
        // Grab the input element from target
        const inputEl = event.target as HTMLInputElement;

        // Check to see if the value is a number
        if (inputEl.valueAsNumber) {
            // Remove any errors should they exist
            setShowError(false);
            setError('');

            // Create a new model with the updated value
            const updatedModel: StepperModel = {...model, [fieldName]: inputEl.valueAsNumber};

            // Set the model
            setModel(updatedModel);

            // Make the current step valid
            steps[currentStep].validity = true;

            // Enable the next button
            setDisableNextButton && setDisableNextButton(false);
        } else {
            // If not, show an error
            setShowError(true);
            setError('Need to pass a number');

            // Make the current step invalid
            steps[currentStep].validity = false;

            // Disable the next button
            setDisableNextButton && setDisableNextButton(true);
        }
    }

    return (
        <div className={styles['currency-field-wrapper']}>
            {field.map((singleField: keyof StepperModel) => (
                <input
                    key={singleField}
                    id={singleField}
                    name={singleField}
                    className={styles['currency-field']}
                    type="number"
                    min="0"
                    pattern="[0-9]*"
                    onInput={(event: FormEvent<HTMLInputElement>) => handleInputListenerEvent(event, singleField)}
                    value={(model[singleField] as number)}
                />
            ))}
            {
                showError &&
                <small className={styles['error']}>{error}</small>
            }
        </div>
    );
}
