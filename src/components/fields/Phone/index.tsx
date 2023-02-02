import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { useStore } from '@nanostores/react';
import { PatternFormat } from 'react-number-format';
import styles from './Phone.module.scss';
import { stepperModel } from '@stores/stepper/maps';
import { currentStep } from '@stores/stepper/atoms/steps';

export function Phone(): JSX.Element {
    const thisStep = useStore(currentStep);
    // Cite: https://phoneregex.com/
    const usPhoneRegex: RegExp = new RegExp(/1?\W*([2-9][0-8][0-9])\W*([2-9][0-9]{2})\W*([0-9]{4})(\se?x?t?(\d*))?/);

    const [error, setError] = useState('');

    /**
     * Set the value of phone for the step and `phone`
     * @param value String of the phone
     */
    function handlePhoneSetting(event: ChangeEvent<HTMLInputElement>): void {
        const { value } = event.target;

        if (thisStep !== undefined) {
            if (usPhoneRegex.test(value)) {
                setError("");

                thisStep.value.phone = value;
                stepperModel.setKey("phone", value);

                const localPhone = value.replace("+1", "").replaceAll(" ", "");
                localStorage.setItem("phone", localPhone);

                thisStep.validity = true;
            } else {
                setError("Please provide a valid phone number");

                thisStep.value.phone = null;
                stepperModel.setKey("phone", "");
                localStorage.setItem("phone", "");

                thisStep.validity = false;
            }
        }
    }

    return (
        <div className={styles['phone-field-wrapper']}>
            <PatternFormat
                className={styles['phone-field']}
                mask="_"
                format="+1 ### ### ####"
                type="tel"
                id="phone"
                name="phone"
                onChange={handlePhoneSetting}
            />
            {
                error !== "" &&
                <small className={styles['error']}>{error}</small>
            }
        </div>
    );
}
