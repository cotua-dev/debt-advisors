import { useState, ChangeEvent } from 'react';
import NumberFormat from 'react-number-format';
import styles from './Currency.module.scss';
import { CurrencyProps } from './Currency.interfaces';

export function Currency(props: CurrencyProps): JSX.Element {
    // Grab what we need from props
    const { field, setField, steps, currentStep, setDisableNextButton } = props;

    const [showError, setShowError] = useState(false);
    const [error, setError] = useState('');

    /**
     * Handle the input change event
     * @param event Input change event
     */
    function handleInputListenerEvent(event: ChangeEvent<HTMLInputElement>): void {
        // Grab the input element from target
        const inputEl = event.target as HTMLInputElement;

        // Set the field
        setField(inputEl.value);

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
            <NumberFormat
                className={styles['currency-field']}
                thousandsGroupStyle="thousand"
                type="text"
                value={field}
                onChange={(event: ChangeEvent<HTMLInputElement>) => handleInputListenerEvent(event)}
                prefix="$"
                decimalSeparator="."
                allowNegative={false}
                thousandSeparator={true}
            />
            {
                showError &&
                <small className={styles['error']}>{error}</small>
            }
        </div>
    );
}
