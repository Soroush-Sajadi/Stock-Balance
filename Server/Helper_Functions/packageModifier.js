const db = require('../DB.json');
const { productModifier } = require('./productModifier')

const packageModifier = (quantity, code, packageNumber, status) => {
    for(let i = 0, packagesLen = db.packages.length; i < packagesLen; i += 1) {
        if (db.packages[i].code === code) {
            for(let j = 0, packagesLen = db.packages[i].packages.length; j < packagesLen; j += 1) {
                if (db.packages[i].packages[j].package === Number(packageNumber)) {
                    if(status.toLowerCase() === 's') {
                        db.packages[i].packages[j].sold = db.packages[i].packages[j].sold + Number(quantity);
                        return productModifier(quantity, status, db.packages[i].packages[j].products, packageNumber);
                    } 
                    if (status.toLowerCase() === 'i') {
                        db.packages[i].packages[j].delivred = db.packages[i].packages[j].delivred + Number(quantity);
                        return productModifier(quantity, status, db.packages[i].packages[j].products, packageNumber)
                    }
                    return [{message:`This Package, With Statues ${status}P Does Not Exist, Try SP Or IP`}]
                }
            }
            return [{message: `This Package With Package Number ${packageNumber} Does Not Exist`}]   
        }  
    }
    return [{message: `This Package With Code ${code} Does Not Exist`}] 
}

module.exports.packageModifier = packageModifier;