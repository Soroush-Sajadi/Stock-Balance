const db = require('../DB.json');

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

module.exports.getStock = getStock;