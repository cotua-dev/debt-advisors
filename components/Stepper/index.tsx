import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './Stepper.module.scss';
import { initialStepperModel, initialSteps, Step, StepperModel } from './Stepper.interfaces';

export function Stepper(): JSX.Element {
    const router = useRouter();
    const [model, setModel] = useState(initialStepperModel);
    const [currentStep, setCurrentStep] = useState(0);
    const [steps, setSteps] = useState(initialSteps);
    const [disableNextButton, setDisableNextButton] = useState(false);
    const [disablePreviousButton, setDisablePreviousButton] = useState(true);

    useEffect(() => {
        // Get the current model from local storage
        let localStorageModel: string | null = window.localStorage.getItem('model');

        // Check to make sure we got something from local storage
        if (localStorageModel === null) {
            // If not, turn the current model into a string and set local storage
            const stringifiedModel = JSON.stringify(model);
            window.localStorage.setItem('model', stringifiedModel);
            localStorageModel = stringifiedModel;
        } else {
            // If we got something from local storage, reset the model with the value from local storage
            setModel(JSON.parse(localStorageModel));
        }
    }, []);

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

    const nextStep = () => {
        if (currentStep >= steps.length - 1) {
            setDisableNextButton(true);
            setCurrentStep(steps.length - 1);
        } else {
            setDisableNextButton(false);
            setCurrentStep(currentStep + 1);
        }

        setDisablePreviousButton(false);
    }

    return (
        <section className={styles['debt-advisors-stepper']}>
            <div className={styles['steps-wrapper']}>
                {steps.map((step: Step) => {
                    const stepIndex: number = steps.findIndex((thisStep: Step) => thisStep.question === step.question);
                    const showStep: boolean = stepIndex === currentStep;

                    return (
                        <div key={step.question} className={`${styles['step']} ${showStep ? '' : styles['hidden']}`}>
                            <strong className={styles['question']}>{step.question}</strong>
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
