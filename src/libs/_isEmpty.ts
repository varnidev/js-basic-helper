function isEmpty(value: any) {
    // V2023.12.002
    if (typeof value != "object" && typeof value != "function") {
        if (
            [undefined, null, 0, "0", "", NaN].some(
                (checkValue) => checkValue == value
            )
        ) {
            return true;
        }
        return false;
    } else {
        if (value == null) {
            return true;
        } else if (Array.isArray(value)) {
            return value.length < 1;
        } else if (value instanceof Date) {
            return false;
        } else if (typeof value == "function") {
            return false;
        }
    }
    return Object.keys(value).length === 0;
}

export default isEmpty;