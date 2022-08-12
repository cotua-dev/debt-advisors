import { useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import styles from './Stepper.module.scss';
import { ParsedStepperModel, Step, StepperModel, StepperProps } from './Stepper.interfaces';
import { initialNoUserSteps, initialStepperModel, initialSteps } from './Stepper.initial';
import { addBitrixContactDeal, parseModel, sendSMS, verifySMSCode } from './Stepper.utility';
import { Questions } from './Stepper.enums';
import { MultipleChoiceField } from '../fields/MultipleChoice';
import { Currency } from '../fields/Currency';
import { Location } from '../fields/Location';
import { Name } from '../fields/Name';
import { Email } from '../fields/Email';
import { Phone } from '../fields/Phone';
import { Verify } from '../fields/Verify';

export function Stepper(props: StepperProps): JSX.Element {
    const router = useRouter();
    const [model, setModel] = useState(initialStepperModel);
    const [currentStep, setCurrentStep] = useState(0);
    const [steps, setSteps] = useState(props['stepper-type'] == 'full' ? initialSteps : initialNoUserSteps);
    const [disableNextButton, setDisableNextButton] = useState(true);
    const [disablePreviousButton, setDisablePreviousButton] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [disableVerifyField, setDisableVerifyField] = useState(true);

    // Fields
    const [zipCode, setZipCode] = useState(props['user-info'] === undefined ? '' : props['user-info'].zip);
    const [firstName, setFirstName] = useState(props['user-info'] === undefined ? '' : props['user-info'].firstName);
    const [lastName, setLastName] = useState(props['user-info'] === undefined ? '' : props['user-info'].lastName);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');
    const [usState, setUSState] = useState(props['user-info'] === undefined ? '' : props['user-info'].stateAbbreviation);

    /**
     * Send a SMS to the provided phone number to verify the user owns the number
     */
    async function kickOffSMS(): Promise<void> {
        // Show a loading spinner, disable verify field, and reset error
        setLoading(true);
        setDisableVerifyField(true);
        setError('');

        // Make sure the phone is not an empty string
        if (phone !== '') {
            const smsResponse: Response | undefined = await sendSMS(phone);

            // Make sure we have a response object and its status is 200
            if (smsResponse !== undefined && smsResponse.status === 200) {
                // Enable verify field
                setDisableVerifyField(false);
            } else {
                // Display error
                setError('Something went wrong. Please try again');
            }
        } else {
            // Display error
            setError('Please provide a valid phone number');
        }

        // Hide the loading spinner
        setLoading(false);
    }

    function sendThankYouPage() {
        switch (router.pathname) {
            case '/ohio':
                window.location.href = `${window.location.origin}/ohio/thank-you`;
                break;
            case '/new-jersey':
                window.location.href = `${window.location.origin}/new-jersey/thank-you`;
                break;
            case '/colorado':
                window.location.href = `${window.location.origin}/colorado/thank-you`;
                break;
            case '/credit-card':
                window.location.href = `${window.location.origin}/credit-card/thank-you`;
                break;
            case '/debt':
                window.location.href = `${window.location.origin}/debt/thank-you`;
                break;
            case '/medical':
                window.location.href = `${window.location.origin}/medical/thank-you`;
                break;
            case '/personal':
                window.location.href = `${window.location.origin}/personal/thank-you`;
                break;
            case '/student-loan':
                window.location.href = `${window.location.origin}/student-loan/thank-you`;
                break;
            default:
                window.location.href = `${window.location.origin}/thank-you`;
                break;
        }
    }

    /**
     * Verify the user provided code with their phone number
     */
    async function submission(data: ParsedStepperModel): Promise<void> {
        // Show a loading spinner and reset error
        setLoading(true);
        setError('');

        if (props['stepper-type'] === 'short') {
            const bitrixResponse: Response | undefined = await addBitrixContactDeal(data);

            if (bitrixResponse !== undefined && bitrixResponse.status === 200) {
                sendThankYouPage();
            } else {
                setError('Something went wrong. Please try again');
            }

            // Stop the function here
            setLoading(false);
            return;
        }

        // Make sure we have a `phone` and `code`
        if (phone !== '' && code !== '' && props['stepper-type'] === 'full') {
            const verifyResponse: Response | undefined = await verifySMSCode(phone, code);

            // Make sure we have a response object and its status is 200
            if (verifyResponse !== undefined && verifyResponse.status === 200) {
                const bitrixResponse: Response | undefined = await addBitrixContactDeal(data);

                // Make sure we have a response object and its status is 200
                if (bitrixResponse !== undefined && bitrixResponse.status === 200) {
                    // Send to thank you page with browser refresh (this way state is completely wiped in one go)
                    sendThankYouPage();
                } else {
                    // Display error
                    setError('Something went wrong. Please try again');
                }
            } else {
                // Display error
                setError('Something went wrong. Please try again');
            }
        } else {
            // Display error
            setError('Please provide a valid phone number and code for verification');
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
        // Grab needed properties from the current step
        const { validity, question } = steps[currentStep];

        /*
        // Check if we passed the unsecured debt field
        if (question === Questions.UnsecuredDebtAmount) {
            // Parse the unsecured debt amount into a number
            const unsecuredDebtAmountNumber: number = parseCurrencyValue(model.unsecuredDebtAmount);

            // Check if the debt is less than $7,500
            if (unsecuredDebtAmountNumber < 7500) {
                // If so, send to disqualify page with browser refresh (this way state is completely wiped in one go)
                window.location.href = `${window.location.origin}/dq`;
            }
        }
        */

        // Check if we passed the zip code field
        if (question === Questions.ZipCode) {
            // Check to see if the city is in North Dakota or South Carolina
            if (usState === 'North Dakota' || usState === 'South Carolina') {
                // If so, send to disqualify page with browser refresh (this way state is completely wiped in one go)
                window.location.href = `${window.location.origin}/dq`;
            }
        }

        // Check if we passed the phone number field
        if (question === Questions.Phone) {
            // We should have a phone number at this point which means we can send
            // a SMS message to verify the phone number
            kickOffSMS();
        }

        // Check the current step's validity
        if (validity) {
            // If valid, enable the next button
            setDisableNextButton(false);

            // Check if we are on the last step
            if (currentStep >= steps.length - 1) {
                // Disable the next button and set the current step to the last step
                // since we should not go any further
                setDisableNextButton(true);
                setCurrentStep(steps.length - 1);
            } else {
                // Otherwise, go to the next step
                setCurrentStep(currentStep + 1);
            }
        } else {
            // If currently invalid, disable the next button
            setDisableNextButton(true);
        }

        // Enable the previous button since we are moving forward
        setDisablePreviousButton(false);
    }

    /**
     * Handle the submit button click event
     */
    function onSubmit(): void {
        // Get the unparsed model and parse it for submission
        const unparsedModel: StepperModel = {
            ...model,
            email,
            firstName,
            lastName,
            phone,
            zipCode,
        };
        let parsedModel: ParsedStepperModel = parseModel(unparsedModel);

        if (props['stepper-type'] === 'short') {
            parsedModel.isMailer = true;
        }

        if (parsedModel.isMailer && props['user-info'] !== undefined) {
            const {
                referenceId, middleInitial, suffix, address, city,
                stateAbbreviation, crrt, barcode, county, estimatedDebt,
                settled, newPayment, tier, segment, drop, tollFreeNumber,
                spanishTollFreeNumber, noticeDate, url, stateFull,
            } = props['user-info'];

            parsedModel = {
                ...parsedModel,
                referenceId, middleInitial, suffix, address, city,
                stateAbbreviation, crrt, barcode, county, estimatedDebt,
                settled, newPayment, tier, segment, drop, tollFreeNumber,
                spanishTollFreeNumber, noticeDate, url, stateFull,
            };
        }

        // Run submission
        submission(parsedModel);
    }

    return (
        <section className={styles['debt-advisors-stepper']}>
            <small>{`${currentStep + 1} of ${steps.length}`}</small>
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
                                        setSteps={setSteps}
                                        model={model}
                                        nextStep={nextStep}
                                        steps={steps}
                                        currentStep={currentStep}
                                        stepperType={props['stepper-type']}
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
                                        setUSState={setUSState}
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
                                        disableVerifyField={disableVerifyField}
                                    />
                            }
                        </div>
                    );
                })}
            </div>
            {loading && <FontAwesomeIcon className="h-7 text-daa-purple animate-spin" icon={faCircleNotch} spin/>}
            {error !== '' && <small className={styles['error']}>{error}</small>}
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
                        onClick={() => onSubmit()}
                        disabled={disableNextButton}
                    >{`Call or Text Me Now`}</button>
                }
            </div>
        </section>
    );
}
