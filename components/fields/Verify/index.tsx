import { ChangeEvent, useState } from 'react';
import NumberFormat from 'react-number-format';
import { VerifyProps } from './Verify.interfaces';
import styles from './Verify.module.scss';

export function Verify(props: VerifyProps): JSX.Element {
    const { steps, currentStep, setDisableNextButton, code, setCode } = props;

    // Should match a code of exactly 6 numbers between 0 and 9
    const codeRegex: RegExp = new RegExp(/^[0-9]{6}$/);

    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);

    /**
     * Set the value of code for the step and `code`
     * @param value String of the code
     */
    function handleCodeSetting(value: string): void {
        // Set `code`
        setCode(value);

        // Check to see if we pass the regular expression test
        if (codeRegex.test(value)) {
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
            setError('Please provide a valid code');
            setShowError(true);

            // Disable the next button
            setDisableNextButton(true);
        }
    }

    return (
        <div className={styles['code-field-wrapper']}>
            <NumberFormat
                className={styles['code-field']}
                format="######"
                type="text"
                id="code"
                name="code"
                value={code}
                onChange={(event: ChangeEvent<HTMLInputElement>) => handleCodeSetting(event.target.value)}
            />
            {
                showError &&
                <small className={styles['error']}>{error}</small>
            }
        </div>
    );
}
