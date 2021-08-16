import { ChangeEvent } from 'react';
import { NameProps } from './Name.interfaces';
import styles from './Name.module.scss';

export function Name(props: NameProps): JSX.Element {
    const { steps, currentStep, setDisableNextButton, firstName, lastName, setFirstName, setLastName } = props;

    /**
     * Set the value of first name for the step and `firstName`
     * @param value String of the first name
     */
    function handleFirstNameSetting(value: string): void {
        // Set the `firstName`
        setFirstName(value);

        // Set the current step's `firstName` value
        steps[currentStep].value.firstName = value;
    }

    /**
     * Set the value of last name for the step and `lastName`
     * @param value String of the last name
     */
    function handleLastNameSetting(value: string): void {
        // Set the `lastName`
        setLastName(value);

        // Set the current step's `lastName` value
        steps[currentStep].value.lastName = value;

        // Make the current step valid
        steps[currentStep].validity = true;

        // Enable the next button
        setDisableNextButton && setDisableNextButton(false);
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
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleFirstNameSetting(e.target.value)}
                    value={firstName}
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
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleLastNameSetting(e.target.value)}
                    value={lastName}
                />
            </div>
        </div>
    );
}
