export function pageView() {
    (window as any).fbq("track", "PageView");
}

export function event(name: string, options: unknown = {}) {
    (window as any).fbq("track", name, options);
}

export function singleEvent(name: string, pixelId: string, options: unknown = {}) {
    (window as any).fbq("trackSingle", pixelId, name, options);
}

export function singleCustomEvent(name: string, pixelId: string, options: unknown = {}) {
    (window as any).fbq("trackSingleCustom", pixelId, name, options);
}
