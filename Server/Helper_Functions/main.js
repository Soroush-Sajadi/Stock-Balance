const { getStock } = require('./getStock');
const { modifier } = require('./modifier');
const { packageIdentifier } = require('./packageIdentifier');



const main = (string, code, switcher) => {
    if(string.toLowerCase() === 'l') {
       return getStock(code);
    }
    const result = packageIdentifier(string, code)
    if(!result) {
        return modifier(string, code, switcher);
    } else {
        return result
    }
    
}

module.exports.main = main;

