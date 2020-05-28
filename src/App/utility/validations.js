export const validateName = (value) => {
    return /^[a-zA-Z ]{2,30}$/.test(value);
}

export const validateEmail = (value) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
}

export const validateMobile = (value) => {
    return /^[0-9]{10}$/.test(value);
}