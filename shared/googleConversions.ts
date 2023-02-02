export function conversion(amount: string | null) {
    (window as any).gtag("event", "conversion", {
        send_to: "AW-315822587/eO1NCPPzzPQCEPujzJYB",
        value: Number(amount || 0),
        currency: "USD",
    });
}
