/**
 * Build and set the google maps library script
 * @param url Google maps URL
 */
export function loadGoogleScript(url: string): HTMLScriptElement {
    // See if we can find an existing google script
    const googleScriptId = 'debt-advisors-google';
    const existingGoogleScript: HTMLElement | null = document.getElementById(googleScriptId);

    // If no google script exists, create a new one
    if (existingGoogleScript === null) {
        // Create the script element
        let googleScript: HTMLScriptElement = document.createElement('script');

        // Set the type
        googleScript.type = 'text/javascript';

        // Set the url
        googleScript.src = url;

        // Set the id
        googleScript.id = googleScriptId;

        // Append the script element to the head
        document.getElementsByTagName('head')[0].appendChild(googleScript);

        return googleScript;
    }

    return existingGoogleScript as HTMLScriptElement;
}

/**
 * Create the Autocomplete object and return it for use
 * @param inputElementRef Input element we are using with the autocomplete functionality
 * @returns Autocomplete object
 */
export function handleGoogleScriptLoad(inputElementRef: HTMLInputElement): google.maps.places.Autocomplete {
    // Create the Autocomplete object
    const autocomplete: google.maps.places.Autocomplete = new google.maps.places.Autocomplete(
        inputElementRef,
        { types: ['(cities)'], componentRestrictions: { country: 'us' } }
    );

    // Set the fields we want to include in the results
    autocomplete.setFields(['address_components', 'formatted_address']);

    // Return the Autocomplete object
    return autocomplete;
}
