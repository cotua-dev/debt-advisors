import { usePlacesWidget } from 'react-google-autocomplete';
import styles from './Location.module.scss';
import { setFormField } from '@stores/stepper/actions';

// Cite: https://betterprogramming.pub/the-best-practice-with-google-place-autocomplete-api-on-react-939211e8b4ce

export function Location(): JSX.Element {
    const { ref } = usePlacesWidget<HTMLInputElement>({
        apiKey: import.meta.env.PUBLIC_GOOGLE_API_KEY || "",
        onPlaceSelected: (place: google.maps.places.PlaceResult) => handlePlaceSelectEvent(place),
        options: { types: ['(cities)'], componentRestrictions: { country: 'us' } },
    });

    /**
     * Parse the `address_components` of the `PlaceResult` and set the US State
     * @param placeResult Object containing data related to the selected place
     */
    function parseAddressComponents(placeResult: google.maps.places.PlaceResult): void {
        const { address_components } = placeResult;

        if (address_components !== undefined) {
            const usStateComponent: google.maps.GeocoderAddressComponent[] = address_components.filter((address_component: google.maps.GeocoderAddressComponent) => {
                let foundComponent = false;
                // Check if the type contains the `administrative_area_level_1` string
                const adminAreaLvlOne: number = address_component.types.findIndex((addressType: string) => addressType === 'administrative_area_level_1');

                if (adminAreaLvlOne !== -1) {
                    foundComponent = true;
                }

                return foundComponent;
            });

            if (usStateComponent.length >= 0) {
                const firstUSStateComponent = usStateComponent[0];

                if (firstUSStateComponent !== undefined) {
                    localStorage.setItem('state', firstUSStateComponent.short_name.toLowerCase());
                }
            }

            const cityComponent: google.maps.GeocoderAddressComponent[] = address_components.filter((address_component: google.maps.GeocoderAddressComponent) => {
                let foundComponent = false;
                const locality: number = address_component.types.findIndex((addressType: string) => addressType === 'locality');

                if (locality !== -1) {
                    foundComponent = true;
                }

                return foundComponent;
            });

            if (cityComponent.length > 0) {
                const firstCityComponent = cityComponent[0];

                if (firstCityComponent !== undefined) {
                    localStorage.setItem('city', firstCityComponent.long_name.toLowerCase().replace(' ', ''));
                }
            }

            const countryComponents: google.maps.GeocoderAddressComponent[] = address_components.filter((address_component: google.maps.GeocoderAddressComponent) => {
                let foundComponent = false;
                const locality: number = address_component.types.findIndex((addressType: string) => addressType === "country");

                if (locality !== -1) {
                    foundComponent = true;
                }

                return foundComponent;
            });

            if (countryComponents.length > 0) {
                const firstCountryComponent = countryComponents[0];
                if (firstCountryComponent !== undefined) {
                    localStorage.setItem("country", firstCountryComponent.short_name.toLowerCase().replace(" ", ""));
                }
            }
        }
    }

    function handlePlaceSelectEvent(place: google.maps.places.PlaceResult): void {
        const formattedAddress = place.formatted_address;

        parseAddressComponents(place);

        if (formattedAddress !== undefined) {
            setFormField(formattedAddress);
        }
    }

    return (
        <div className={styles['location-wrapper']}>
            <input
                className={styles['location-field']}
                ref={ref}
            />
        </div>
    );
}
