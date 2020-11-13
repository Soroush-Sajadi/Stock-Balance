const db = require('../DB.json');

const productModifier = (quantity, status, array, packageNumber) => {
    for (let i = 0, packageslen = array.length; i < packageslen; i += 1) {
        for(let j = 0, productsLen = db.products.length; j < productsLen; j += 1 ) {
            if (array[i].code === db.products[j].code) {
                if(status.toLowerCase() === 's') {
                    db.products[j].sold = db.products[j].sold + Number(quantity);
                }
                if(status.toLowerCase() === 'i')
                    db.products[j].delivred = db.products[j].delivred + Number(quantity);
            }
        }
    }
    return [{message: quantity === "s" ? ' Package Is Sold ': 'Package Is Delivred'}];
}


module.exports.productModifier = productModifier