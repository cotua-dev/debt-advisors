export function submitForm(amount: string | null) {
    (window as any).ttq.instance("CEHM5CBC77UDF9719OR0");
    (window as any).ttq.track("SubmitForm", {
        value: Number(amount) || 0,
        currency: "USD",
        content_type: "product",
        content_id: "1",
        content_name: "stepper",
    });
}
