import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { useStore } from '@nanostores/react';
import styles from './Email.module.scss';
import { currentStep } from '@stores/stepper/atoms/steps';
import { stepperModel } from '@stores/stepper/maps';

export function Email(): JSX.Element {
    const thisStep = useStore(currentStep);

    // Cite: https://www.emailregex.com/
    const emailRegex: RegExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    const [error, setError] = useState('');

    /**
     * Set the value of email for the step and `email`
     * @param value String of the email
     */
    function handleEmailSetting(event: ChangeEvent<HTMLInputElement>): void {
        const { value } = event.target;

        if (thisStep !== undefined) {
            if (emailRegex.test(value)) {
                setError('');

                thisStep.value.email = value;
                stepperModel.setKey("email", value);
                localStorage.setItem("email", value);

                thisStep.validity = true;
            } else {
                setError("Please provide an email");

                thisStep.value.email = null;
                stepperModel.setKey("email", "");
                localStorage.setItem("email", "");

                thisStep.validity = false;
            }
        }
    }

    return (
        <div className={styles['email-field-wrapper']}>
            <input
                className={styles['email-field']}
                type="email"
                id="email"
                name="email"
                onChange={handleEmailSetting}
            />
            {
                error !== "" &&
                <small className={styles['error']}>{error}</small>
            }
        </div>
    );
}
