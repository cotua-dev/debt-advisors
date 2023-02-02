export function initializeURLParams(): void {
    // test url: http://localhost:3000/stepper?utm_campaign=TestCampaign&utm_content=TestContent&utm_medium=TestMedium&utm_source=TestSource&utm_term=TestTerm&placement=TestPlacement&fbclid=TestFBclid&gclid=TestGclid

    const { search } = window.location
    const urlParams: Map<string, string> = new Map();

    const parsedSearch = search.replace("?", "");
    const trimmedSearch: string[] = parsedSearch.split("&");

    trimmedSearch.map((trimmedSearchParam: string) => {
        const [key, value] = trimmedSearchParam.split("=");
        urlParams.set(key as string, value as string);
    });

    let utm_campaign: string | undefined;
    let utm_content: string | undefined;
    let utm_medium: string | undefined;
    let utm_source: string | undefined;
    let utm_term: string | undefined;
    let placement: string | undefined;
    let fbclid: string | undefined;
    let gclid: string | undefined;

    if (urlParams.has("utm_campaign")) {
        utm_campaign = urlParams.get("utm_campaign");
    }

    if (urlParams.has("utm_content")) {
        utm_content = urlParams.get("utm_content");
    }

    if (urlParams.has("utm_medium")) {
        utm_medium = urlParams.get("utm_medium");
    }

    if (urlParams.has("utm_source")) {
        utm_source = urlParams.get("utm_source");
    }

    if (urlParams.has("utm_term")) {
        utm_term = urlParams.get("utm_term");
    }

    if (urlParams.has("Placement")) {
        placement = urlParams.get("Placement");
    }

    if (urlParams.has("fbclid")) {
        fbclid = urlParams.get("fbclid");
    }

    if (urlParams.has("gclid")) {
        gclid = urlParams.get("gclid");
    }

    localStorage.setItem("utm_campaign", utm_campaign || "");
    localStorage.setItem("utm_content", utm_content || "");
    localStorage.setItem("utm_medium", utm_medium || "");
    localStorage.setItem("utm_source", utm_source || "");
    localStorage.setItem("utm_term", utm_term || "");
    localStorage.setItem("placement", placement || "");
    localStorage.setItem("fbclid", fbclid || "");
    localStorage.setItem("gclid", gclid || "");
}
