const db = require('../DB.json');
const { regex } = require('./regex');


const modifier = (string, code, boolean) => {
    const reg = regex(string);
    if (reg.message) {
        return [reg]
    }
    for(let i = 0, len = db.products.length; i < len; i += 1) {
        if(db.products[i].code === code) {
            if(reg.status.toLowerCase() === 's') {
                db.products[i].sold = db.products[i].sold + Number(reg.quantity);
                if (boolean === 'true') {
                    db.products[i].delivred = db.products[i].delivred + 2 * (Number(reg.quantity));
                    return [{message: reg.quantity === 1 ? `One Product Is Sold And 2 Products Are delivred With Code: ${code} `: ` ${reg.quantity} Products Are Sold And ${2 * (Number(reg.quantity))} Products Are delivred With Code ${code}` }  ]
                }
                return [{message: reg.quantity === 1 ? `One Product Is Sold With Code: ${code} `: ` ${reg.quantity} Products Are Sold With Code ${code}`}]
            }
            if(reg.status.toLowerCase() === 'i') {
                db.products[i].delivred = db.products[i].delivred + Number(reg.quantity);
                return  [{message: reg.quantity === 1 ? `One Product Is Delivred With Code: ${code} `: ` ${reg.quantity} Products Are Delivred With Code ${code}`}]
            }
            return [{message: `This Status, "${reg.status}" Dose Not Exist, Try L, I Or S`}]
        }
    }
    return [{message: 'This Product Does Not Exist In The Stock, Try L And All To Check The Whole Stock'}] ;
}

module.exports.modifier = modifier