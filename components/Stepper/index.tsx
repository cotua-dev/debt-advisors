import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './Stepper.module.scss';
import { initialStepperModel, initialSteps, MultipleChoiceValues, Step, StepperModel } from './Stepper.interfaces';
import { MultipleChoiceField } from '../fields/MultipleChoice';
import { Currency } from '../fields/Currency';
import { Location } from '../fields/Location';

export function Stepper(): JSX.Element {
    const [model, setModel] = useState(initialStepperModel);
    const [currentStep, setCurrentStep] = useState(0);
    const [steps, setSteps] = useState(initialSteps);
    const [disableNextButton, setDisableNextButton] = useState(true);
    const [disablePreviousButton, setDisablePreviousButton] = useState(true);
    
    // Zip code field
    const [zipCode, setZipCode] = useState('');

    /**
     * Initialize the values of every step
     */
    /*
    const initializeStepValues = (): void => {
        // Initialize variables
        let step: Step;
        let property: keyof StepperModel;
        let updatedSteps: Step[] = [...steps];

        // Loop through all initial steps
        for (step of updatedSteps) {
            // Loop through all the properties of each step
            for (property of step.property) {
                // Set the initial value to null
                step.value[property] = null;
            }
        }

        // Reset the steps
        setSteps(updatedSteps);
    }
    */

    /*
    useEffect(() => {
        // Initialize the step values
        initializeStepValues();

        // Get the current model from local storage
        let localStorageModel: string | null = window.localStorage.getItem('model');

        // Check to make sure we got something from local storage
        if (localStorageModel === null) {
            // If not, turn the current model into a string and set local storage
            const stringifiedModel = JSON.stringify(model);
            window.localStorage.setItem('model', stringifiedModel);
            localStorageModel = stringifiedModel;
        } else {
            // Parse the local storage string into the model
            const parsedLocalStorageModel: StepperModel = JSON.parse(localStorageModel);

            // If we got something from local storage, reset the model with the value from local storage
            setModel(parsedLocalStorageModel);

            // Update steps using the updated model
            steps.forEach((step: Step) => {
                step.property.forEach((property: keyof StepperModel) => {
                    if (
                        parsedLocalStorageModel[property] !== null ||
                        parsedLocalStorageModel[property] !== 0 ||
                        parsedLocalStorageModel[property] !== ''
                    ) {
                        step.value[property] = parsedLocalStorageModel[property];
                    } else {
                        step.validity = false;
                    }
                });
            });
        }

        console.info({steps});
    }, []);
    */

    /**
     * @todo Needs work
     */
    const previousStep = () => {
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
    const nextStep = () => {
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
                <button
                    className={styles['next-button']}
                    type="button"
                    onClick={() => nextStep()}
                    disabled={disableNextButton}
                >{'Next'}<FontAwesomeIcon className={styles['caret']} icon={faAngleRight}/></button>
            </div>
        </section>
    );
}
