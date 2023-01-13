import { SHA256 } from "crypto-js";

export function insertTrackingScripts() {
    const amount: string | null = localStorage.getItem('amount');
    const email: string | null = localStorage.getItem('email');
    const phone: string | null = localStorage.getItem('phone');
    const firstName: string | null = localStorage.getItem('firstName');
    const lastName: string | null = localStorage.getItem('lastName');
    const city: string | null = localStorage.getItem('city');
    const state: string | null = localStorage.getItem('state');

    const bodyEl: HTMLBodyElement | null = document.querySelector("body");
    if (bodyEl !== null) {
        // Add Facebook track script
        let facebookTrackScript: HTMLElement | null = document.getElementById("facebook-track-script");
        if (facebookTrackScript === null) {
            facebookTrackScript = document.createElement("script");
            facebookTrackScript.id = "facebook-track-script";
            facebookTrackScript.append(
                `fbq("trackSingle", "1011657849590069", "Lead", {
                    content_category: "product",
                    content_name: "stepper",
                    currency: "USD",
                    value: ${amount !== null ? Number(parseFloat(amount).toFixed(2)) : 0.00},
                    em: "${email !== null ? SHA256(email).toString() : ""}",
                    ph: "${phone !== null ? SHA256(phone).toString() : ""}",
                    fn: "${firstName !== null ? SHA256(firstName).toString() : ""}",
                    ln: "${lastName !== null ? SHA256(lastName).toString() : ""}",
                    ct: "${city !== null ? SHA256(city).toString() : ""}",
                    st: "${state !== null ? SHA256(state).toString() : ""}",
                }, { eventID: "lead_${new Date().getTime()}" });
                fbq("trackSingle", "5736031759798138", "Lead", {
                    content_category: "product",
                    content_name: "stepper",
                    currency: "USD",
                    value: ${amount !== null ? Number(parseFloat(amount).toFixed(2)) : 0.00}},
                    em: "${email !== null ? SHA256(email).toString() : ""}",
                    ph: "${phone !== null ? SHA256(phone).toString() : ""}",
                    fn: "${firstName !== null ? SHA256(firstName).toString() : ""}",
                    ln: "${lastName !== null ? SHA256(lastName).toString() : ""}",
                    ct: "${city !== null ? SHA256(city).toString() : ""}",
                    st: "${state !== null ? SHA256(state).toString() : ""}",
                }, { eventID: "lead_${new Date().getTime()}" });
                fbq("trackSingle", "722608354594685", "Lead", {
                    content_category: "product",
                    content_name: "stepper",
                    currency: "USD",
                    value: ${amount !== null ? Number(parseFloat(amount).toFixed(2)) : 0.00}},
                    em: "${email !== null ? SHA256(email).toString() : ""}",
                    ph: "${phone !== null ? SHA256(phone).toString() : ""}",
                    fn: "${firstName !== null ? SHA256(firstName).toString() : ""}",
                    ln: "${lastName !== null ? SHA256(lastName).toString() : ""}",
                    ct: "${city !== null ? SHA256(city).toString() : ""}",
                    st: "${state !== null ? SHA256(state).toString() : ""}",
                }, { eventID: "lead_${new Date().getTime()}" });`
            );

            bodyEl.append(facebookTrackScript);
        }

        // Add Tiktok track script
        let tikTokTrackScript: HTMLElement | null = document.getElementById("tik-tok-track-script");
        if (tikTokTrackScript === null) {
            tikTokTrackScript = document.createElement("script");
            tikTokTrackScript.id = "tik-tok-track-script";
            tikTokTrackScript.append(
                `ttq.instance("CEHM5CBC77UDF9719OR0");
                ttq.track("SubmitForm", {
                    value: ${Number(amount) || 0},
                    currency: "USD",
                    content_type: "product",
                    content_id: "1",
                    content_name: "stepper",
                });`
            );

            bodyEl.append(tikTokTrackScript);
        }
    }

    const headEl: HTMLHeadElement | null = document.querySelector("head");
    if (headEl !== null) {
        // Add Google Enhanced Conversions data
        let enhancedConversionDataScript: HTMLElement | null = document.getElementById("google-enhanced-conversions-data-script");
        if (enhancedConversionDataScript === null) {
            enhancedConversionDataScript = document.createElement("script");
            enhancedConversionDataScript.id = "google-enhanced-conversions-data-script";
            enhancedConversionDataScript.append(
                `const enhanced_conversion_data = {
                    email: "${email || ""}",
                    phone: "${phone || ""}",
                    firstName: "${firstName || ""}",
                    lastName: "${lastName || ""}",
                    city: "${city || ""}",
                    state: "${state || ""}",
                };`
            );

            headEl.append(enhancedConversionDataScript);
        }

        // Add Google Tag Conversion script
        let googleTagConversionScript: HTMLElement | null = document.getElementById("google-tag-conversion");
        if (googleTagConversionScript === null) {
            googleTagConversionScript = document.createElement("script");
            googleTagConversionScript.id = "google-tag-conversion";
            googleTagConversionScript.append(
                `gtag("event", "conversion", {
                    send_to: "AW-315822587/eO1NCPPzzPQCEPujzJYB",
                    value: ${Number(amount) || 0},
                    currency: "USD",
                });`
            );

            headEl.append(googleTagConversionScript);
        }
    }
}
