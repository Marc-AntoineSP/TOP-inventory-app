const inventory_db = require('../db/inventoryQuery');
const order_db = require('../db/orderQuery');

const renderMW = (req, res) => res.status(200).render('index');

const getInventory = async (req, res, next) => {
    res.locals.inventory = res.locals.inventory || {}
    res.locals.inventory.items = await inventory_db.getInventory(); // INVENTORY => POSSEDE LES ITEMS
    res.locals.solde = 0; // PAR DEFAULT AU DEBUT => LA LOCAL POSSEDE LE SOLDE
    next();
}

const getOrderFromButton = (req, res, next) => {
    console.log(req.params, 'getorder');
    next();
}

const getComponentFromInventory = async (req, res, next) => {
    const {id, quantity} = req.params;
    const component = (await inventory_db.getComponentFromId(id)).rows[0];
    console.log(component, 'compo');
    console.log(quantity, 'quantity');
    await order_db.addToOrder(component, quantity);
    res.status(300).redirect('/')
}

module.exports = {renderMW, getInventory, getOrderFromButton, getComponentFromInventory};