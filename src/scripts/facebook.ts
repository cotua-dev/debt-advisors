import { SHA256 } from "crypto-js";
import { v4 as uuidv4 } from "uuid";

export function fetchExternalId(): string {
    let uuid: string | null = localStorage.getItem("uuid");
    if (uuid === null) {
        uuid = uuidv4();
        localStorage.setItem("uuid", uuid);
    }

    return SHA256(uuid).toString();
}

export function initializeFacebookPixels(): void {
    const externalId = fetchExternalId();

    (window as any).fbq("init", "1011657849590069", { external_id: externalId });
    (window as any).fbq("init", "5736031759798138", { external_id: externalId });
    (window as any).fbq("track", "PageView");
}
