const pool = require('./connect');

const getInventory = async () => (await pool.query(`SELECT id, component_name, price, quantity FROM inventory`)).rows;
const processInventory = async () => {
    const result = await getInventory();
    result.forEach(res => res.totalPrice = res.price * res.quantity);
    return result;
}

module.exports = {getInventory, processInventory}