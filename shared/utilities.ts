interface GclidRecord {
    value: string;
    expiryDate: number;
};

/**
 * Verify if an object is of type `GclidRecord`
 * @param record Object that may or may not be of type `GclidRecord`
 * @returns Boolean indicating whether the passed object is of type `GclidRecord`
 */
function isGclidRecord(record: GclidRecord | any): record is GclidRecord {
    return (record as GclidRecord).value !== undefined;
}

/**
 * Get the param value if available
 * @param p String of param to find
 * @description https://support.google.com/google-ads/answer/7012522?hl=en
 * @returns String of the param value if found. Otherwise null
 */
function getParam(p: string): string | null {
    const match = RegExp('[?&]' + p + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

/**
 * Create the expiration record so we can keep track of how long we have left before the conversion is useless
 * @param value Value of param
 * @description https://support.google.com/google-ads/answer/7012522?hl=en
 * @returns Object containing the param value and an expiration date for the conversion
 */
function getExpiryRecord(value: string): GclidRecord {
    const expiryPeriod = 90 * 24 * 60 * 60 * 1000; // 90 day expiry in milliseconds
    const expiryDate = new Date().getTime() + expiryPeriod;

    return { value: value, expiryDate: expiryDate, };
}

/**
 * Grab the GCLID from the url parameter, set it to `localStorage` if present, and set the value of the hidden field
 */
export function addGclid(): void {
    const gclidParam: string | null = getParam('gclid');
    const gclidFormFields: string[] = ['gclid_field']; // all possible gclid form field ids here
    let gclidRecord: GclidRecord | null = null;
    let currGclidFormField: HTMLElement | null = null;

    const gclsrcParam = getParam('gclsrc');
    const isGclsrcValid = !gclsrcParam || gclsrcParam.indexOf('aw') !== -1;

    gclidFormFields.forEach((field) => {
        const foundField: HTMLElement | null = document.getElementById(field);
        if (foundField) {
            currGclidFormField = foundField;
        }
    });

    if (gclidParam && isGclsrcValid) {
        gclidRecord = getExpiryRecord(gclidParam);
        localStorage.setItem('gclid', JSON.stringify(gclidRecord));
    }

    const localStorageGclid: string | null = localStorage.getItem('gclid');
    let gclid: GclidRecord | null = null;
    if (gclidRecord !== null) {
        gclid = gclidRecord
    } else {
        if (localStorageGclid !== null) {
            const parsedLocalStorageGclid: GclidRecord | any = JSON.parse(localStorageGclid);
            if (isGclidRecord(parsedLocalStorageGclid)) {
                gclid = parsedLocalStorageGclid;
            }
        }
    }
    const isGclidValid = gclid && new Date().getTime() < gclid.expiryDate;

    if (currGclidFormField && isGclidValid && gclid !== null) {
        (currGclidFormField as HTMLInputElement).value = gclid.value;
    }
}

export function onThankYouPages(): boolean {
    return window.location.pathname === "/thanks" ||
        window.location.pathname === "/thank-you" ||
        window.location.pathname === "/colorado/thank-you" ||
        window.location.pathname === "/credit-card/thank-you" ||
        window.location.pathname === "/debt/thank-you" ||
        window.location.pathname === "/medical/thank-you" ||
        window.location.pathname === "/new-jersey/thank-you" ||
        window.location.pathname === "/ohio/thank-you" ||
        window.location.pathname === "/personal/thank-you" ||
        window.location.pathname === "/student-loan/thank-you";
}
