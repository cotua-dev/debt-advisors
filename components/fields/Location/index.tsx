import { useEffect, useRef, MutableRefObject, ChangeEvent } from 'react';
import AutoComplete from 'react-google-autocomplete';
import styles from './Location.module.scss';
import { loadGoogleScript, handleGoogleScriptLoad } from './google-places';
import poweredByGoogleImage from '../../../public/images/powered_by_google_on_white.png';
import { LocationProps } from './Location.interfaces';

// Cite: https://betterprogramming.pub/the-best-practice-with-google-place-autocomplete-api-on-react-939211e8b4ce

export function Location(props: LocationProps): JSX.Element {
    // Grab what we need from props
    const { zipCode, setZipCode, steps, currentStep, setDisableNextButton, setUSState } = props;

    // Create the google url and a reference to the autocomplete field
    const googleURL: string = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`;
    const autocompleteRef: MutableRefObject<HTMLInputElement | null> = useRef(null);

    /**
     * Use the value to set a property in the model
     * @param value String containing the city
     * @param fieldName String matching a property in the model
     */
    function setModelProperty(value: string): void {
        // Set the zip code
        setZipCode(value);

        // Make the current step valid and set value
        steps[currentStep].validity = true;
        steps[currentStep].value.zipCode = value;

        // Enable the next button
        setDisableNextButton && setDisableNextButton(false);
    };

    /**
     * Update the model when a change occurs in the input
     * @param event Change event from an input element
     */
    function handleInputListenerEvent(event: ChangeEvent<HTMLInputElement>): void {
        // Grab the input element from target
        const inputEl = event.target as HTMLInputElement;

        // Set the property in the model
        setModelProperty(inputEl.value);
    };

    /**
     * Parse the `address_components` of the `PlaceResult` and set the US State
     * @param placeResult Object containing data related to the selected place
     */
    function parseAddressComponents(placeResult: google.maps.places.PlaceResult): void {
        // Grab the needed property
        const { address_components } = placeResult;

        // Make sure it is not undefined
        if (address_components !== undefined) {
            // Filter through the address components to find the state
            const usStateComponent: google.maps.GeocoderAddressComponent[] = address_components.filter((address_component: google.maps.GeocoderAddressComponent) => {
                // Check if the type contains the `administrative_area_level_1` string
                const adminAreaLvlOne: number = address_component.types.findIndex((addressType: string) => addressType === 'administrative_area_level_1');

                // Make sure we have an index
                if (adminAreaLvlOne !== -1) {
                    // Return the address component since we now have the US State
                    return address_component;
                }
            });

            // Make sure we have the needed component (should only have 1)
            if (usStateComponent.length >= 0) {
                // Set the US State using its long name
                setUSState(usStateComponent[0].long_name);
            }
        }
    }

    function handlePlaceSelectEvent(place: google.maps.places.PlaceResult): void {
        // Get the formatted address
        const formattedAddress = place.formatted_address;

        // Parse the US State
        parseAddressComponents(place);

        // Make sure the formatted address is not undefined
        if (formattedAddress !== undefined) {
            // Set the location
            setModelProperty(formattedAddress);
        }
    }

    /*
    useEffect(() => {
        // Load the google script
        const googleScript: HTMLScriptElement = loadGoogleScript(googleURL);

        // Wait for the script to load
        googleScript.onload = () => {
            // Make sure the autocomplete element reference exists
            if (autocompleteRef.current !== null) {
                // Get the Autocomplete object
                const autocomplete = handleGoogleScriptLoad(autocompleteRef.current);

                // Listen on `place_changed` event
                const googlePlacesEventListener = autocomplete.addListener('place_changed', () => {
                    // Get the formatted address from the PlaceResult
                    const placeResult = autocomplete.getPlace();
                    const formattedAddress = placeResult.formatted_address;

                    // Parse and set the US State
                    parseAddressComponents(placeResult);

                    // Make sure the formatted address is defined
                    if (formattedAddress !== undefined) {
                        // Set the location
                        setModelProperty(formattedAddress);
                    }
                });

                // Remove the listeners when the component is destroyed
                return () => {
                    google.maps.event.removeListener(googlePlacesEventListener);
                    google.maps.event.clearInstanceListeners(autocomplete);
                    autocompleteRef.current?.remove();
                    document.getElementById('debt-advisors-google')?.remove();
                };
            }
        }
    });
    */

    return (
        <div className={styles['location-wrapper']}>
            <AutoComplete
                className={styles['location-field']}
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
                onPlaceSelected={(place: google.maps.places.PlaceResult) => handlePlaceSelectEvent(place)}
                onChange={(event: ChangeEvent<HTMLInputElement>) => handleInputListenerEvent(event)}
                options={{ types: ['(cities)'], componentRestrictions: { country: 'us' } }}
                value={zipCode}
            />
            {/* <input
                className={styles['location-field']}
                ref={autocompleteRef}
                type="text"
                id="zip-code"
                name="zip-code"
                onChange={(event: ChangeEvent<HTMLInputElement>) => handleInputListenerEvent(event)}
                value={zipCode}
            /> */}
            <picture>
                <source srcSet={poweredByGoogleImage.src}/>
                <img
                    className={styles['powered-by-google-logo']}
                    src={poweredByGoogleImage.src}
                    alt="Powered By Google Logo"
                    loading="lazy"
                />
            </picture>
        </div>
    );
}
