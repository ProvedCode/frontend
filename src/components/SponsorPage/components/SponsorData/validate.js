export function validateFirstName(firstName) {
    const FIRST_NAME_REGEXP = /^[a-zA-Z'\s]{1,30}$/;
    if (FIRST_NAME_REGEXP.test(String(firstName).toLowerCase())) {
        return { error: "", state: true };
    } else {
        let msg = "";
        if (firstName.trim() === "") {
            msg = "*empty field";
        } else if (firstName.length > 30) {
            msg = "*the value is too long";
        } else if (!FIRST_NAME_REGEXP.test(firstName)) {
            msg = "*you can use only latins letters";
        } else {
            msg = "*not valid";
        }
        return { error: msg, state: false };
    }
}

export function validateLastName(lastName) {
    const LAST_NAME_REGEXP = /^[a-zA-Z'\s]{1,30}$/;
    if (LAST_NAME_REGEXP.test(String(lastName).toLowerCase())) {
        return { error: "", state: true };
    } else {
        let msg = "";
        if (lastName.trim() === "") {
            msg = "*empty field";
        } else if (lastName.length > 30) {
            msg = "*the value is too long";
        } else if (!LAST_NAME_REGEXP.test(lastName)) {
            msg = "*you can use only latins letters";
        } else {
            msg = "*not valid";
        }
        return { error: msg, state: false };
    }
}

export function validateKudos(kudos) {
    const KUDOS_REGEXP = /^[1-9]\d*$/;
    if (kudos === "") {
        return { error: "*empty field", state: false };
    } else if (parseInt(kudos) > 2000000000) {
        return { error: "*the value is too long", state: false };
    } else if (!KUDOS_REGEXP.test(kudos)) {
        return { error: "*enter only positive integer number", state: false };
    }

    return { error: "", state: true };
}
