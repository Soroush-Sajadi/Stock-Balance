const db = require('../DB.json');

const regex = (string) => {
    if (!/^\d+/.test(string)) {
        return {quantity: 1, status: string}
    }
    if (!/[a-z]+/.test(string)) {
        return {message: 'You Did Not Choose Any Status, Try L, I Or S'}
    }
    const regexQunatity = /[0-9]+/
    const regexString = /[a-z A-Z]+/
    const quantity = string.match(regexQunatity)[0];
    const status = string.match(regexString)[0];
    return {quantity: quantity, status: status}

}

const getStock = (code) => {
    const length = db.products.length
    if (code.toLowerCase() === 'all') {
        return db.products
    }
    for(let i = 0; i < length; i += 1) {
        if(db.products[i].code === code) {
            return [db.products[i]]
        }
    }
    return [{message: 'This Product Does Not Exist In The Stock, Try L And All To Check The Whole Stack'}];
}

const modifyStock = (string, code) => {
    const reg = regex(string);
    if (reg.message) {
        return [reg]
    }
    for(let i = 0, len = db.products.length; i < len; i += 1) {
        if(db.products[i].code === code) {
            console.log(db.products[i].code , code)
            if(reg.status.toLowerCase() === 's') {
                db.products[i].sold = db.products[i].sold + Number(reg.quantity);
                return [{message: 'Data Is Saved'}]
            }
            if(reg.status.toLowerCase() === 'i') {
                console.log("i")
                db.products[i].delivred = db.products[i].delivred + Number(reg.quantity);
                return  [{message: 'Data Is Saved'}]
            }
            return [{message: 'This Status Dose Not Exist, Try L, I Or S'}]
        }
    }
    return [{message: 'This Product Does Not Exist In The Stock, Try L And All To Check The Whole Stack'}] ;
}

const modifier = (string, code) => {
    if(string.toLowerCase() === 'l') {
       return getStock(code);
    }
    return modifyStock(string, code);
    
}

module.exports.modifier = modifier;

