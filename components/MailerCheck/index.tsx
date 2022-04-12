import { ChangeEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { MailerCheckResponseBody } from './MailerCheck.interfaces';
import { Stepper } from '../Stepper';

export function MailerCheck(): JSX.Element {
    const [firstField, setFirstField] = useState('');
    const [secondField, setSecondField] = useState('');
    const [showError, setShowError] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [foundMailer, setFoundMailer] = useState<MailerCheckResponseBody | null>(null);

    function resetError(): void {
        setError('');
        setShowError(false);
    }

    async function fetchRecipientRecord(): Promise<void> {
        setLoading(true);

        if (firstField === '' || secondField === '') {
            setError('One or more fields are blank');
            setShowError(true);
        } else {
            resetError();
            const combinedFieldValues = `${firstField.toUpperCase()}-${secondField.toUpperCase()}`;

            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_COTUA_API_URL}/DAAMailer?reference-id=${combinedFieldValues}`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                });

                const data: MailerCheckResponseBody | null = await response.json();
                setFoundMailer(data);

                if (foundMailer === null) {
                    setError(`We could not find a record with id: ${combinedFieldValues}`);
                    setShowError(true);
                }

                if (foundMailer !== null) {
                    resetError();
                }
            } catch (fetchRecipientRecordErr) {
                console.error({fetchRecipientRecordErr});
                throw new Error(fetchRecipientRecordErr as string);
            }
        }

        setLoading(false);
    }

    return (
        <section className="h-screen flex flex-col items-center justify-start px-2">
            {foundMailer === null &&
                <>
                    <h2 className="text-3xl sm:text-4xl text-center font-bold">{`Please Provide a Reference Id`}</h2>
                    <small className="text-sm mt-4">{`Example: `}<strong>{`A1B2-12345`}</strong></small>
                    {showError && <small className="text-sm text-center text-red-700 mt-4">{error}</small>}
                    <div className="w-full flex flex-col items-center justify-center mt-4">
                        <div className="block mb-4">
                            <input
                                type="text"
                                className="w-20 text-base text-center p-1 mr-1 border border-1 rounded"
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstField(e.target.value)}
                            />
                            {`–`}
                            <input
                                type="text"
                                className="w-20 text-base text-center p-1 ml-1 border border-1 rounded"
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setSecondField(e.target.value)}
                            />
                        </div>
                        {loading &&
                            <small className="my-4 text-daa-purple text-sm text-center">
                                <FontAwesomeIcon className="animate-spin text-daa-purple mx-auto mb-2 h-6" icon={faGear}/>
                                {`Looking for record ${firstField.toUpperCase()}-${secondField.toUpperCase()}`}
                            </small>
                        }
                        <button
                            type="button"
                            className="w-full sm:w-32 bg-daa-red text-white font-bold rounded-lg shadow p-2"
                            onClick={fetchRecipientRecord}
                            disabled={loading}
                        >Submit</button>
                    </div>
                </>
            }
            {foundMailer !== null &&
                <div className="container">
                    <h2 className="text-center text-3xl sm:text-4xl font-bold">{`Welcome ${foundMailer.firstName} ${foundMailer.lastName}!`}</h2>
                    <Stepper
                        stepper-type="short"
                        user-info={foundMailer}
                    />
                </div>
            }
        </section>
    );
}
