import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { NumericFormat } from 'react-number-format';
import { useStore } from '@nanostores/react';
import styles from './Currency.module.scss';
import { setFormField } from '@stores/stepper/actions';
import { currentStep } from '@stores/stepper/atoms/steps';
import type { Step } from '@stores/stepper/interfaces';

export function Currency(): JSX.Element {
    const [error, setError] = useState('');
    const thisStep: Step | undefined = useStore(currentStep);

    function handleInputListenerEvent(event: ChangeEvent<HTMLInputElement>): void {
        const inputEl = event.target as HTMLInputElement;

        if (thisStep !== undefined) {
            if (inputEl.value !== "") {
                setError("");
                setFormField(inputEl.value);
            } else {
                setError("Need to provide a value");
                setFormField(null);
            }
        }
    }

    return (
        <div className={styles['currency-field-wrapper']}>
            <NumericFormat
                className={styles['currency-field']}
                thousandsGroupStyle="thousand"
                type="text"
                onChange={handleInputListenerEvent}
                prefix="$"
                decimalSeparator="."
                allowNegative={false}
                thousandSeparator={true}
            />
            {
                error !== "" &&
                <small className={styles['error']}>{error}</small>
            }
        </div>
    );
}
