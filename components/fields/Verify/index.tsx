import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import NumberFormat from 'react-number-format';
import { VerifyProps } from './Verify.interfaces';
import styles from './Verify.module.scss';

export function Verify(props: VerifyProps): JSX.Element {
    const { steps, currentStep, setDisableNextButton, code, setCode, disableVerifyField } = props;

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
                disabled={disableVerifyField}
            />
            <small className={styles['note']}>
                {`By clicking the "Call or Text Me Now” button below, you agree to receive promotional messages sent via an autodialer and other automated systems. This agreement isn't a condition of any purchase. Terms and Privacy Policy can be found at `}
                <Link href="/terms-of-use"><a aria-label="Terms of Use Page Link">{`Terms`}</a></Link>
                {` and `}
                <Link href="/privacy-policy"><a aria-label="Privacy Policy Page Link">{`Privacy Policy.`}</a></Link>
                {` You may receive every week until you tell us to stop trying to contact you. To stop receiving phone calls, call `}
                <a href="tel:+18886838681">{`888-683-8681.`}</a>
                {` To stop receiving text messages, reply STOP. To stop receiving emails, click the UNSUBSCRIBE button in the message.`}
            </small>
            {
                showError &&
                <small className={styles['error']}>{error}</small>
            }
        </div>
    );
}
