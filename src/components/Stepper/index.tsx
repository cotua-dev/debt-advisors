import { useState } from 'react';
import { useStore } from "@nanostores/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import styles from './Stepper.module.scss';
import type { ParsedStepperModel, Step, StepperProps } from './Stepper.interfaces';
import { addBitrixContactDeal, parseCurrencyValue, parseModel, sendSMS, verifySMSCode } from './Stepper.utility';
import { MultipleChoiceField } from '../fields/MultipleChoice';
import { Currency } from '../fields/Currency';
import { Location } from '../fields/Location';
import { Name } from '../fields/Name';
import { Email } from '../fields/Email';
import { Phone } from '../fields/Phone';
import { Verify } from '../fields/Verify';

import { stepperModel } from '@stores/stepper/maps';
import { initialSteps, initialNoUserSteps, currentStep as literalCurrentStep, currentStepCount } from "@stores/stepper/atoms/steps";
import { disableNextStep, disablePreviousStep, disableSMSStep, disableVerifyStep, fetchCurrentStep, nextStep, previousStep } from '@stores/stepper/actions';
import { Questions } from '@stores/stepper/enums';

export function Stepper(props: StepperProps): JSX.Element {
    const model = useStore(stepperModel);
    const steps = useStore(props["stepper-type"] == "full" ? initialSteps : initialNoUserSteps);
    const thisStep: Step | undefined = useStore(literalCurrentStep)

    // const [model, setModel] = useState(initialStepperModel);
    // const [currentStep, setCurrentStep] = useState(0);
    // const [steps, setSteps] = useState(props['stepper-type'] == 'full' ? initialSteps : initialNoUserSteps);
    // const [disableNextButton, setDisableNextButton] = useState(true);
    // const [disablePreviousButton, setDisablePreviousButton] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [disableVerifyField, setDisableVerifyField] = useState(true);

    const minimumDebtAmount = 5000;

    // Fields
    // const [zipCode, setZipCode] = useState(props['user-info'] === undefined ? '' : props['user-info'].zip);
    // const [firstName, setFirstName] = useState(props['user-info'] === undefined ? '' : props['user-info'].firstName);
    // const [lastName, setLastName] = useState(props['user-info'] === undefined ? '' : props['user-info'].lastName);
    // const [email, setEmail] = useState('');
    // const [phone, setPhone] = useState('');
    // const [code, setCode] = useState('');
    // const [usState, setUSState] = useState(props['user-info'] === undefined ? '' : props['user-info'].stateAbbreviation);

    /**
     * Send a SMS to the provided phone number to verify the user owns the number
     */
    async function kickOffSMS(): Promise<void> {
        // Show a loading spinner, disable verify field, and reset error
        setLoading(true);
        setDisableVerifyField(true);
        setError('');
        const phone = model.phone;

        // Make sure the phone is not an empty string
        if (phone !== '') {
            const smsResponse: Response | undefined = await sendSMS(phone);

            // Make sure we have a response object and its status is 200
            if (smsResponse !== undefined && smsResponse.status === 200) {
                // Enable verify field
                setDisableVerifyField(false);
                nextStep();
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

    function sendThankYouPage(unsecuredDebtAmount: number) {
        // let thankYouRoute = `${window.location.origin}/thank-you`;
        const debtLessThan10k: boolean = unsecuredDebtAmount >= minimumDebtAmount && unsecuredDebtAmount < 10000;
        const pathname: string = window.location.pathname;
        const thankYouRoute = debtLessThan10k ? "thanks" : "thank-you";
        const uuid = localStorage.getItem("uuid") || "";

        switch (pathname) {
            case '/ohio':
                window.location.href = `${window.location.origin}/ohio/${thankYouRoute}?id=${uuid}`
                break;
            case '/new-jersey':
                window.location.href = `${window.location.origin}/new-jersey/${thankYouRoute}?id=${uuid}`
                break;
            case '/colorado':
                window.location.href = `${window.location.origin}/colorado/${thankYouRoute}?id=${uuid}`
                break;
            case '/credit-card':
                window.location.href = `${window.location.origin}/credit-card/${thankYouRoute}?id=${uuid}`
                break;
            case '/debt':
                window.location.href = `${window.location.origin}/debt/${thankYouRoute}?id=${uuid}`
                break;
            case '/medical':
                window.location.href = `${window.location.origin}/medical/${thankYouRoute}?id=${uuid}`
                break;
            case '/personal':
                window.location.href = `${window.location.origin}/personal/${thankYouRoute}?id=${uuid}`
                break;
            case '/student-loan':
                window.location.href = `${window.location.origin}/student-loan/${thankYouRoute}?id=${uuid}`
                break;
            default:
                window.location.href = `${window.location.origin}/${thankYouRoute}?id=${uuid}`;
                break;
        }
    }

    /**
     * Verify the user provided code with their phone number
     */
    async function submission(): Promise<void> {
        // Show a loading spinner and reset error
        setLoading(true);
        setError('');
        const phone = model.phone;
        const code = model.code;

        const parsedModel: ParsedStepperModel = parseModel(model);

        if (props['stepper-type'] === 'short') {
            const bitrixResponse: Response | undefined = await addBitrixContactDeal(parsedModel);

            if (bitrixResponse !== undefined && bitrixResponse.status === 200) {
                sendThankYouPage(parsedModel.unsecuredDebtAmount);
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
                const bitrixResponse: Response | undefined = await addBitrixContactDeal(parsedModel);

                // Make sure we have a response object and its status is 200
                if (bitrixResponse !== undefined && bitrixResponse.status === 200) {
                    // Send to thank you page with browser refresh (this way state is completely wiped in one go)
                    sendThankYouPage(parsedModel.unsecuredDebtAmount);
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
    // function previousStep() {
    //     if (currentStep - 1 < 0) {
    //         setDisablePreviousButton(true);
    //         setCurrentStep(0);
    //     } else {
    //         setDisablePreviousButton(false);
    //         setCurrentStep(currentStep - 1);
    //     }

    //     setDisableNextButton(false);
    // }

    /**
     * @todo Needs work
     */
    // function nextStep() {
    //     // Grab needed properties from the current step
    //     const thisStep = steps[currentStep];

    //     if (thisStep !== undefined) {
    //         console.info({thisStep, model});
    //         const { validity, question } = thisStep;

    //         // Check if we passed the unsecured debt field
    //         if (question === Questions.UnsecuredDebtAmount) {
    //             // Parse the unsecured debt amount into a number
    //             const unsecuredDebtAmountNumber: number = parseCurrencyValue(model.unsecuredDebtAmount);

    //             // Set unsecured debt amount in an atom
    //             localStorage.setItem('amount', unsecuredDebtAmountNumber.toString());

    //             // Check if the debt is less than $5,000
    //             if (unsecuredDebtAmountNumber < minimumDebtAmount) {
    //                 // If so, send to disqualify page with browser refresh (this way state is completely wiped in one go)
    //                 window.location.href = `${window.location.origin}/dq`;
    //             }
    //         }

    //         // Check if we passed the zip code field
    //         if (question === Questions.ZipCode) {
    //             // Check to see if the city is in North Dakota or South Carolina
    //             if (model.stateAbbreviation === 'North Dakota' || model.stateAbbreviation === 'South Carolina') {
    //                 // If so, send to disqualify page with browser refresh (this way state is completely wiped in one go)
    //                 window.location.href = `${window.location.origin}/dq`;
    //             }
    //         }

    //         // Check if we passed the phone number field
    //         if (question === Questions.Phone) {
    //             // We should have a phone number at this point which means we can send
    //             // a SMS message to verify the phone number
    //             kickOffSMS();
    //         }

    //         // Check the current step's validity
    //         if (validity) {
    //             // If valid, enable the next button
    //             setDisableNextButton(false);

    //             // Check if we are on the last step
    //             if (currentStep >= steps.length - 1) {
    //                 // Disable the next button and set the current step to the last step
    //                 // since we should not go any further
    //                 setDisableNextButton(true);
    //                 setCurrentStep(steps.length - 1);
    //             } else {
    //                 // Otherwise, go to the next step
    //                 setCurrentStep(currentStep + 1);
    //             }
    //         } else {
    //             // If currently invalid, disable the next button
    //             setDisableNextButton(true);
    //         }
    //     }

    //     // Enable the previous button since we are moving forward
    //     setDisablePreviousButton(false);
    // }

    /**
     * Handle the submit button click event
     */
    // function onSubmit(): void {
    //     const { email, firstName, lastName, phone, zipCode } = model;
    //     // Get the unparsed model and parse it for submission
    //     const unparsedModel: StepperModel = {
    //         ...model,
    //         email,
    //         firstName,
    //         lastName,
    //         phone,
    //         zipCode,
    //     };
    //     let parsedModel: ParsedStepperModel = parseModel(unparsedModel);

    //     if (props['stepper-type'] === 'short') {
    //         parsedModel.isMailer = true;
    //     }

    //     if (parsedModel.isMailer && props['user-info'] !== undefined) {
    //         const {
    //             referenceId, middleInitial, suffix, address, city,
    //             stateAbbreviation, crrt, barcode, county, estimatedDebt,
    //             settled, newPayment, tier, segment, drop, tollFreeNumber,
    //             spanishTollFreeNumber, noticeDate, url, stateFull,
    //         } = props['user-info'];

    //         parsedModel = {
    //             ...parsedModel,
    //             referenceId, middleInitial, suffix, address, city,
    //             stateAbbreviation, crrt, barcode, county, estimatedDebt,
    //             settled, newPayment, tier, segment, drop, tollFreeNumber,
    //             spanishTollFreeNumber, noticeDate, url, stateFull,
    //         };
    //     }

    //     // Run submission
    //     submission(parsedModel);
    // }

    const currentStep = useStore(currentStepCount);

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
                            {step.stepType === 'multiple-choice' && <MultipleChoiceField/>}
                            {step.stepType === 'currency' && <Currency/>}
                            {step.stepType === 'location' && <Location/>}
                            {step.stepType === 'name' && <Name/>}
                            {step.stepType === 'email' && <Email/>}
                            {step.stepType === 'phone' && <Phone/>}
                            {step.stepType === 'verify' && <Verify/>}
                        </div>
                    );
                })}
            </div>
            {loading && <FontAwesomeIcon className="h-7 text-daa-purple animate-spin" icon={faCircleNotch} spin/>}
            {error !== '' && <small className={styles['error']}>{error}</small>}
            <div className="flex flex-row items-center justify-center w-full text-lg">
                <button
                    className="bg-daa-red w-20 h-10 py-2 rounded flex items-center justify-center cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                    type="button"
                    onClick={() => previousStep()}
                    disabled={disablePreviousStep()}
                ><FontAwesomeIcon className="text-white h-5 w-5" icon={faAngleLeft}/></button>
                {
                    thisStep !== undefined && thisStep.question === Questions.Phone &&
                    <button
                        className="bg-daa-purple text-white max-w-xs w-full h-10 rounded ml-4 py-2 flex items-center justify-center cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                        type="button"
                        onClick={() => kickOffSMS()}
                        disabled={disableSMSStep()}
                    >{`Send SMS`}</button>
                }
                {
                    thisStep !== undefined && (thisStep.question !== Questions.Phone && thisStep.question !== Questions.Code) && steps.length - 1 !== currentStep &&
                    <button
                        className="bg-daa-purple text-white max-w-xs w-full h-10 rounded ml-4 py-2 flex items-center justify-center cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                        type="button"
                        onClick={() => nextStep()}
                        disabled={disableNextStep()}
                    >{'Next'}<FontAwesomeIcon className="h-5 w-5 ml-2" icon={faAngleRight}/></button>
                }
                {
                    thisStep !== undefined && thisStep.question === Questions.Code && steps.length - 1 === currentStep &&
                    <button
                        className="bg-daa-purple text-white max-w-xs w-full h-10 rounded ml-4 py-2 flex items-center justify-center cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                        type="button"
                        onClick={() => submission()}
                        disabled={disableVerifyStep()}
                    >{`Call or Text Me Now`}</button>
                }
            </div>
        </section>
    );
}
