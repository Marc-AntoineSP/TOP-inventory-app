const pool = require('./connect');

const getInventory = async () => {
    const res = (await pool.query(`SELECT id, component_name, quantity, img FROM inventory`)).rows;
    console.log(res, 'getInv');
    return res;

}

const getComponentFromId = async (id) => await pool.query(`SELECT * FROM inventory WHERE "id" = ${id}`);

module.exports = {getInventory, getComponentFromId}