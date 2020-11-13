const { regex } = require('./regex');
const { packageModifier } = require('./packageModifier')

const packageIdentifier  = (string, code) => {
    const reg = regex(string);
    if (reg.message) {
        return [reg]
    }
    if (reg.status.split('').length === 2) {
        if((reg.status.split('')[1]).toLowerCase() === 'p') {
            const packageNumber = string.match(/\d+$/)[0]
            return packageModifier(reg.quantity, code, packageNumber, reg.status.split('')[0] );
        }
        return [{message: `This Status, "${reg.status}" Dose Not Exist, Try SP Or IP`}]
    }
    return false
}

module.exports.packageIdentifier  = packageIdentifier;