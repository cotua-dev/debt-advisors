import { map } from "nanostores";
import { SHA256 } from "crypto-js";
import type { Storage } from "./interfaces";

export const storageMap = map<Storage>({
    amount: localStorage.getItem("amount") || "",
    email: localStorage.getItem("email") || "",
    phone: localStorage.getItem("phone") || "",
    firstName: localStorage.getItem("firstName") || "",
    lastName: localStorage.getItem("lastName") || "",
    city: localStorage.getItem("city") || "",
    state: localStorage.getItem("state") || "",
    amountHashed: SHA256(localStorage.getItem("amount") || "").toString(),
    emailHashed: SHA256(localStorage.getItem("email") || "").toString(),
    phoneHashed: SHA256(localStorage.getItem("phone") || "").toString(),
    firstNameHashed: SHA256(localStorage.getItem("firstName") || "").toString(),
    lastNameHashed: SHA256(localStorage.getItem("lastName") || "").toString(),
    cityHashed: SHA256(localStorage.getItem("city") || "").toString(),
    stateHashed: SHA256(localStorage.getItem("state") || "").toString(),
});
