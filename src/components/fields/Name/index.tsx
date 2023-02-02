import type { ChangeEvent } from 'react';
import { useStore } from '@nanostores/react';
import { currentStep } from '@stores/stepper/atoms/steps';
import { stepperModel } from '@stores/stepper/maps';
import styles from './Name.module.scss';

export function Name(): JSX.Element {
    const thisStep = useStore(currentStep);
    const model = useStore(stepperModel);

    function checkNameStepValidity(): boolean {
        const localFirstName: string | null = localStorage.getItem("firstName");
        const localLastName: string | null = localStorage.getItem("lastName");

        return localFirstName !== null &&
            localLastName !== null &&
            thisStep?.value.firstName !== undefined &&
            thisStep?.value.lastName !== undefined;
    }

    /**
     * Set the value of first name for the step and `firstName`
     * @param value String of the first name
     */
    function handleFirstNameSetting(e: ChangeEvent<HTMLInputElement>): void {
        const { value } = e.target;
        if (thisStep !== undefined) {
            thisStep.value.firstName = value;
            stepperModel.setKey("firstName", value);
            localStorage.setItem("firstName", value);

            thisStep.validity = value !== "" ? checkNameStepValidity() : false;
        }
    }

    /**
     * Set the value of last name for the step and `lastName`
     * @param value String of the last name
     */
    function handleLastNameSetting(e: ChangeEvent<HTMLInputElement>): void {
        const { value } = e.target;
        if (thisStep !== undefined) {
            thisStep.value.lastName = value;
            stepperModel.setKey("lastName", value);
            localStorage.setItem("lastName", value);

            thisStep.validity = value !== "" ? checkNameStepValidity() : false;
        }
    }

    return (
        <div className={styles['name-fields-wrapper']}>
            <div className={styles['name-field-wrapper']}>
                <label
                    className={styles['name-field-label']}
                    htmlFor="firstName"
                >{`First Name`}</label>
                <input
                    className={styles['name-field']}
                    type="text"
                    id="firstName"
                    name="firstName"
                    onChange={handleFirstNameSetting}
                    value={model.firstName}
                />
            </div>
            <div className={styles['name-field-wrapper']}>
                <label
                    className={styles['name-field-label']}
                    htmlFor="lastName"
                >{`Last Name`}</label>
                <input
                    className={styles['name-field']}
                    type="text"
                    id="lastName"
                    name="lastName"
                    onChange={handleLastNameSetting}
                    value={model.lastName}
                />
            </div>
        </div>
    );
}
