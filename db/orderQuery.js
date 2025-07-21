const pool = require('./connect');

const addToOrder = async (component, quantity) => await pool.query(`INSERT INTO order "component_name", "price", "quantity", "img" VALUES (${component.component_name}, ${component.price}, ${component.quantity * quantity}, ${component.img})`);
const getOrder = async () => await pool.query(`SELECT "component_name", "price", "order_quantity", "img" FROM order_db`);

module.exports = {addToOrder, getOrder};