const db = require('../db/queries');
const renderMW = (req, res) => res.status(200).render('index');

const getInventory = async (req, res, next) => {
    res.locals.items = await db.processInventory();
    res.locals.inventory = res.locals.inventory || {}
    res.locals.inventory.solde = 0;
    res.locals.inventory.totalPrice = res.locals.items.reduce((acc, curr) => acc + curr.totalPrice, 0);
    console.log(res.locals.inventory);
    console.log(res.locals.items)
    next();
}

module.exports = {renderMW, getInventory};