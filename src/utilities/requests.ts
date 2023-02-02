import type { CloudflareCDNTrace } from "@interfaces/requests.interfaces";

/**
 * Fetch the client ip address by hitting Cloudflare's CDN trace page and scraping it
 * @returns Promise containing the client ip address
 */
export async function fetchIPFromCloudflare(): Promise<string> {
    // Cite: https://stackoverflow.com/a/68304489/4992228
    let ipAddress = '';

    try {
        const response: Response = await fetch('https://1.1.1.1/cdn-cgi/trace');
        const dataText: string = await response.text();
        const dataArray: string[][] = dataText.trim().split('\n').map((keyValue: string) => keyValue.split('='));

        const cloudflareCDNTrace: CloudflareCDNTrace = Object.fromEntries(dataArray);

        ipAddress = cloudflareCDNTrace.ip;
    } catch (exception: unknown) {
        console.error({ exception });
        throw exception as string;
    }

    return ipAddress;
}
