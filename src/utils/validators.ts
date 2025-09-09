const cardNumberValidator = (value: string) => {
    const isEmpty = !value;
    const regexNumbers = new RegExp(/^[0-9]*$/);
    const hasProperLength = value.length === 16;
    const hasOnlyNumbers = regexNumbers.test(value);

    const valid = !isEmpty && hasProperLength && hasOnlyNumbers;

    return { isValid: valid };
};

const cardNameValidator = (value: string) => {
    const isEmpty = !value;

    const regexEnglishLetters = new RegExp(/^[a-zA-Z\s]*$/);
    const hasOnlyEnglishLetters = regexEnglishLetters.test(value);

    const valid = !isEmpty && hasOnlyEnglishLetters;
    return { isValid: valid };
};

const expirationMonthValidator = (value: string) => {
    const numberValue = parseInt(value);
    const isEmpty = !value;
    const hasProperLength = value.length === 2;

    const isBetweenRange = numberValue >= 1 && numberValue <= 12;

    const valid = !isEmpty && hasProperLength && isBetweenRange;
    return { isValid: valid };
};

const expirationYearValidator = (value: string) => {
    const numberValue = parseInt(value);
    const isEmpty = !value;

    const hasProperLength = value.length === 4;

    const currentYear = new Date().getFullYear();
    const maxAllowedYear = currentYear + 3;
    const isBetweenRange =
        numberValue >= currentYear && numberValue <= maxAllowedYear;

    const valid = !isEmpty && isBetweenRange && hasProperLength;
    return { isValid: valid };
};

const cardCodeValidator = (value: string) => {
    const isEmpty = !value;

    const hasProperLength = value.length === 3;

    const valid = !isEmpty && hasProperLength;
    return { isValid: valid };
};

export const validators = {
    cardNumber: cardNumberValidator,
    cardName: cardNameValidator,
    expirationMonth: expirationMonthValidator,
    expirationYear: expirationYearValidator,
    cardCode: cardCodeValidator,
};

export const errorMessages = {
    cardNumber: "Invalid Card Number",
    cardName: "Invalid Card Name",
    expirationMonth: "Invalid Month",
    expirationYear: "Invalid Year",
    cardCode: "Invalid Code",
};
