import { ChangeEvent, useState } from 'react';
import NumberFormat from 'react-number-format';
import { PhoneProps } from './Phone.interfaces';
import styles from './Phone.module.scss';

export function Phone(props: PhoneProps): JSX.Element {
    const { steps, currentStep, setDisableNextButton, phone, setPhone } = props;

    // Cite: https://phoneregex.com/
    const usPhoneRegex: RegExp = new RegExp(/1?\W*([2-9][0-8][0-9])\W*([2-9][0-9]{2})\W*([0-9]{4})(\se?x?t?(\d*))?/);

    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);

    /**
     * Set the value of phone for the step and `phone`
     * @param value String of the phone
     */
    function handlePhoneSetting(value: string): void {
        // Set `phone`
        setPhone(value);

        // Check to see if the value passes the regular expression test
        if (usPhoneRegex.test(value)) {
            // Set and remove error
            setError('');
            setShowError(false);

            // Set the current step's `phone` value
            steps[currentStep].value.phone = value;

            // Make the current step valid
            steps[currentStep].validity = true;

            // Enable the next button
            setDisableNextButton(false);
        } else {
            // Set and show error
            setError('Please provide a phone number');
            setShowError(true);

            // Disable the next button
            setDisableNextButton(true);
        }
    }

    return (
        <div className={styles['phone-field-wrapper']}>
            <NumberFormat
                className={styles['phone-field']}
                mask="_"
                format="+1 ### ### ####"
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(event: ChangeEvent<HTMLInputElement>) => handlePhoneSetting(event.target.value)}
            />
            {
                showError &&
                <small className={styles['error']}>{error}</small>
            }
        </div>
    );
}
