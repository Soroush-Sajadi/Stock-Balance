const regex = (string) => {
    if (!/^\d+/.test(string)) {
        return {quantity: 1, status: string}
    }
    if (!/[a-z A-Z]+/.test(string)) {
        return {message: 'You Did Not Choose Any Status, Try L, I Or S'}
    }
    const regexQunatity = /[0-9]+/
    const regexString = /[a-z A-Z]+/
    const quantity = string.match(regexQunatity)[0];
    const status = string.match(regexString)[0];
    return {quantity: Number(quantity), status: status}

}

module.exports.regex = regex;