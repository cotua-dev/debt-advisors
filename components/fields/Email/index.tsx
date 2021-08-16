import { ChangeEvent, useState } from 'react';
import { EmailProps } from './Email.interfaces';
import styles from './Email.module.scss';

export function Email(props: EmailProps): JSX.Element {
    const { steps, currentStep, setDisableNextButton, email, setEmail } = props;

    // Cite: https://www.emailregex.com/
    const emailRegex: RegExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);

    /**
     * Set the value of email for the step and `email`
     * @param value String of the email
     */
    function handleEmailSetting(value: string): void {
        // Set `email`
        setEmail(value);

        // Check to see if the value passes the regular expression test
        if (emailRegex.test(value)) {
            // Set and remove error
            setError('');
            setShowError(false);

            // Set the current step's `email` value
            steps[currentStep].value.email = value;

            // Make the current step valid
            steps[currentStep].validity = true;

            // Enable the next button
            setDisableNextButton(false);
        } else {
            // Set and show error
            setError('Please provide an email');
            setShowError(true);

            // Disable the next button
            setDisableNextButton(true);
        }
    }

    return (
        <div className={styles['email-field-wrapper']}>
            <input
                className={styles['email-field']}
                type="email"
                id="email"
                name="email"
                onChange={(event: ChangeEvent<HTMLInputElement>) => handleEmailSetting(event.target.value)}
                value={email}
            />
            {
                showError &&
                <small className={styles['error']}>{error}</small>
            }
        </div>
    );
}
