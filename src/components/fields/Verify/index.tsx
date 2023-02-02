import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { useStore } from '@nanostores/react';
import { PatternFormat } from 'react-number-format';
import styles from './Verify.module.scss';
import { currentStep } from '@stores/stepper/atoms/steps';
import { stepperModel } from '@stores/stepper/maps';

export function Verify(): JSX.Element {
    const thisStep = useStore(currentStep);
    // Should match a code of exactly 6 numbers between 0 and 9
    const codeRegex: RegExp = new RegExp(/^[0-9]{6}$/);

    const [error, setError] = useState('');

    /**
     * Set the value of code for the step and `code`
     * @param value String of the code
     */
    function handleCodeSetting(event: ChangeEvent<HTMLInputElement>): void {
        const { value } = event.target;

        if (thisStep !== undefined) {
            if (codeRegex.test(value)) {
                setError("");

                thisStep.value.code = value;
                stepperModel.setKey("code", value);

                thisStep.validity = true;
            } else {
                setError("Please provide a valid code");

                thisStep.value.code = null;
                stepperModel.setKey("code", "");

                thisStep.validity = false;
            }
        }
    }

    return (
        <div className={styles['code-field-wrapper']}>
            <PatternFormat
                className={styles['code-field']}
                format="######"
                type="text"
                id="code"
                name="code"
                onChange={handleCodeSetting}
            />
            <small className={styles['note']}>
                {`By clicking the "Call or Text Me Now” button below, you agree to receive promotional messages sent via an autodialer and other automated systems. This agreement isn't a condition of any purchase. Terms and Privacy Policy can be found at `}
                <a href="/terms-of-use" aria-label="Terms of Use Page Link">{`Terms`}</a>
                {` and `}
                <a href="/privacy-policy" aria-label="Privacy Policy Page Link">{`Privacy Policy.`}</a>
                {` You may receive every week until you tell us to stop trying to contact you. To stop receiving phone calls, call `}
                <a href="tel:+18886838681">{`888-683-8681.`}</a>
                {` To stop receiving text messages, reply STOP. To stop receiving emails, click the UNSUBSCRIBE button in the message.`}
            </small>
            {
                error !== "" &&
                <small className={styles['error']}>{error}</small>
            }
        </div>
    );
}
