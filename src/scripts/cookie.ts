export function setCookieValues() {
    const cookies: string[] = document.cookie.split(";");
    const trimmedCookies: string[] = cookies.map((cookie: string) => cookie.trim());

    const cookieMap: Map<string, string> = new Map();
    trimmedCookies.map((trimmedCookie: string) => {
        const [key, value] = trimmedCookie.split("=");
        cookieMap.set(key as string, value as string);
    });

    let fbp: string | undefined;
    let fbc: string | undefined;

    if (cookieMap.has("_fbp")) {
        fbp = cookieMap.get("_fbp");
    }

    if (cookieMap.has("_fbc")) {
        fbc = cookieMap.get("_fbc");
    }

    localStorage.setItem("fbp", fbp || "");
    localStorage.setItem("fbc", fbc || "");
}
