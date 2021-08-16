import { useState, ChangeEvent } from 'react';
import NumberFormat from 'react-number-format';
import styles from './Currency.module.scss';
import { SharedFieldProps } from '../shared.interfaces';
import { StepperModel } from '../../Stepper/Stepper.interfaces';

export function Currency(props: SharedFieldProps): JSX.Element {
    // Grab what we need from props
    const { model, field, setModel, steps, currentStep, setDisableNextButton } = props;

    const [showError, setShowError] = useState(false);
    const [error, setError] = useState('');

    function handleInputListenerEvent(event: ChangeEvent<HTMLInputElement>, fieldName: keyof StepperModel): void {
        // Grab the input element from target
        const inputEl = event.target as HTMLInputElement;

        // Create a new model with the updated value
        const updatedModel: StepperModel = {...model, [fieldName]: inputEl.value};

        // Set the model
        setModel(updatedModel);

        // Check to see if we have a value
        if (inputEl.value !== '') {
            // Remove any errors should they exist
            setShowError(false);
            setError('');

            // Make the current step valid
            steps[currentStep].validity = true;

            // Enable the next button
            setDisableNextButton && setDisableNextButton(false);
        } else {
            // If not, show an error
            setShowError(true);
            setError('Need to provide a value');

            // Make the current step invalid
            steps[currentStep].validity = false;

            // Disable the next button
            setDisableNextButton && setDisableNextButton(true);
        }
    }

    return (
        <div className={styles['currency-field-wrapper']}>
            {field.map((singleField: keyof StepperModel) => (
                <NumberFormat
                    key={singleField}
                    className={styles['currency-field']}
                    thousandsGroupStyle="thousand"
                    type="text"
                    value={(model[singleField] as string)}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => handleInputListenerEvent(event, singleField)}
                    prefix="$"
                    decimalSeparator="."
                    allowNegative={false}
                    thousandSeparator={true}
                />
            ))}
            {
                showError &&
                <small className={styles['error']}>{error}</small>
            }
        </div>
    );
}
