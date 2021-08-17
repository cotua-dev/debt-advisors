import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './Stepper.module.scss';
import { Step } from './Stepper.interfaces';
import { initialStepperModel, initialSteps } from './Stepper.initial';
import { MultipleChoiceField } from '../fields/MultipleChoice';
import { Currency } from '../fields/Currency';
import { Location } from '../fields/Location';
import { Name } from '../fields/Name';
import { Email } from '../fields/Email';
import { Phone } from '../fields/Phone';
import { Verify } from '../fields/Verify';

export function Stepper(): JSX.Element {
    const [model, setModel] = useState(initialStepperModel);
    const [currentStep, setCurrentStep] = useState(0);
    const [steps, setSteps] = useState(initialSteps);
    const [disableNextButton, setDisableNextButton] = useState(true);
    const [disablePreviousButton, setDisablePreviousButton] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    // Fields
    const [zipCode, setZipCode] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');

    /**
     * Send a SMS to the provided phone number to verify the user owns the number
     */
    async function sendSMS(): Promise<void> {
        // Show a loading spinner
        setLoading(true);

        try {
            // Make sure `phone` is not just an empty string
            if (phone !== '') {
                // Remove spaces from `phone` to make it E.164 compliant
                const e164PhoneNumber: string = phone.replace(' ', '');

                // Send a request with the E.164 phone number that will send an SMS to the provided phone number
                // with a 6 digit code for verification
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/TwilioVerifyPhoneNumber`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ phoneNumber: e164PhoneNumber }),
                });

                // Check to see if we get a 200 status code
                if (response.status === 200) {
                    setDisableNextButton(false);
                }
            }
        } catch(sendSMSError) {
            console.error({ sendSMSError });
            throw new Error(sendSMSError);
        }

        // Hide the loading spinner
        setLoading(false);
    }

    /**
     * Verify the user provided code with their phone number
     */
    async function verifySMSCode(): Promise<void> {
        // Show a loading spinner
        setLoading(true);

        try {
            // Make sure `phone` is not just an empty string
            if (phone !== '') {
                // Remove spaces from `phone` to make it E.164 compliant and get Pilu bitrix API URL
                const e164PhoneNumber: string = phone.replace(' ', '');
                const piluURL = `${process.env.NEXT_PUBLIC_API_URL}/DAABitrix`;

                // Send a request with the E.164 phone number and code for verification
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/TwilioVerifyPhoneNumber`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ phoneNumber: e164PhoneNumber, code }),
                });

                // Check to see if we get a 200 status code
                if (response.status === 200) {
                    // Add lead to Pilu Bitrix

                    // Make sure it worked
                }
            }
        } catch(sendSMSError) {
            console.error({ sendSMSError });
            throw new Error(sendSMSError);
        }

        // Hide the loading spinner
        setLoading(false);
    }

    /**
     * @todo Needs work
     */
    function previousStep() {
        if (currentStep - 1 < 0) {
            setDisablePreviousButton(true);
            setCurrentStep(0);
        } else {
            setDisablePreviousButton(false);
            setCurrentStep(currentStep - 1);
        }

        setDisableNextButton(false);
    }

    /**
     * @todo Needs work
     */
    function nextStep() {
        if (steps[currentStep].validity) {
            setDisableNextButton(false);

            if (currentStep >= steps.length - 1) {
                setDisableNextButton(true);
                setCurrentStep(steps.length - 1);
            } else {
                // setDisableNextButton(false);
                setCurrentStep(currentStep + 1);
            }
        } else {
            setDisableNextButton(true);
        }

        setDisablePreviousButton(false);
    }

    return (
        <section className={styles['debt-advisors-stepper']}>
            <div>
                <small>{`${currentStep + 1} of ${steps.length}`}</small>
            </div>
            <div className={styles['steps-wrapper']}>
                {steps.map((step: Step) => {
                    const stepIndex: number = steps.findIndex((thisStep: Step) => thisStep.question === step.question);
                    const showStep: boolean = stepIndex === currentStep;

                    return (
                        <div key={step.question} className={`${styles['step']} ${showStep ? '' : styles['hidden']}`}>
                            <strong className={styles['question']}>{step.question}</strong>
                            {
                                step.stepType === 'multiple-choice' &&
                                    <MultipleChoiceField
                                        choices={step.choices !== undefined ? step.choices : []}
                                        field={step.property}
                                        setModel={setModel}
                                        model={model}
                                        nextStep={nextStep}
                                        steps={steps}
                                        currentStep={currentStep}
                                    />
                            }
                            {
                                step.stepType === 'currency' &&
                                    <Currency
                                        field={step.property}
                                        setModel={setModel}
                                        model={model}
                                        steps={steps}
                                        currentStep={currentStep}
                                        setDisableNextButton={setDisableNextButton}
                                    />
                            }
                            {
                                step.stepType === 'location' &&
                                    <Location
                                        steps={steps}
                                        currentStep={currentStep}
                                        setDisableNextButton={setDisableNextButton}
                                        zipCode={zipCode}
                                        setZipCode={setZipCode}
                                    />
                            }
                            {
                                step.stepType === 'name' &&
                                    <Name
                                        steps={steps}
                                        currentStep={currentStep}
                                        setDisableNextButton={setDisableNextButton}
                                        firstName={firstName}
                                        lastName={lastName}
                                        setFirstName={setFirstName}
                                        setLastName={setLastName}
                                    />
                            }
                            {
                                step.stepType === 'email' &&
                                    <Email
                                        steps={steps}
                                        currentStep={currentStep}
                                        setDisableNextButton={setDisableNextButton}
                                        email={email}
                                        setEmail={setEmail}
                                    />
                            }
                            {
                                step.stepType === 'phone' &&
                                    <Phone
                                        steps={steps}
                                        currentStep={currentStep}
                                        setDisableNextButton={setDisableNextButton}
                                        phone={phone}
                                        setPhone={setPhone}
                                    />
                            }
                            {
                                step.stepType === 'verify' &&
                                    <Verify
                                        steps={steps}
                                        currentStep={currentStep}
                                        setDisableNextButton={setDisableNextButton}
                                        code={code}
                                        setCode={setCode}
                                    />
                            }
                        </div>
                    );
                })}
            </div>
            <div className={styles['stepper-controls-wrapper']}>
                <button
                    className={styles['previous-button']}
                    type="button"
                    onClick={() => previousStep()}
                    disabled={disablePreviousButton}
                ><FontAwesomeIcon className={styles['caret']} icon={faAngleLeft}/></button>
                {
                    steps.length - 1 !== currentStep &&
                    <button
                        className={styles['next-button']}
                        type="button"
                        onClick={() => nextStep()}
                        disabled={disableNextButton}
                    >{'Next'}<FontAwesomeIcon className={styles['caret']} icon={faAngleRight}/></button>
                }
                {
                    steps.length - 1 === currentStep &&
                    <button
                        className={styles['next-button']}
                        type="button"
                        disabled={disableNextButton}
                    >{`Submit`}</button>
                }
            </div>
        </section>
    );
}
