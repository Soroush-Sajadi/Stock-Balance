const { getStock } = require('./getStock');
const { modifier } = require('./modifier')


const main = (string, code, switcher) => {
    if(string.toLowerCase() === 'l') {
       return getStock(code);
    }
    return modifier(string, code, switcher);
    
}

module.exports.main = main;

