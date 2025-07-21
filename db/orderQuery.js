const pool = require('./connect');

const addToOrder = async (component, quantity) => {
    console.log(component, 'addtoorder')
    await pool.query(`INSERT INTO order_db (component_id, component_name, price, order_quantity, img) VALUES ($1,$2,$3,$4,$5) ON CONFLICT ("component_id") DO UPDATE SET order_quantity = order_db.order_quantity + EXCLUDED.order_quantity`, 
        [
            component.id,
            component.component_name,
            component.price,
            quantity,
            component.img
        ]
    );
}
const getOrder = async () => (await pool.query(`SELECT "component_name", "price", "order_quantity", "img" FROM order_db`)).rows;

module.exports = {addToOrder, getOrder};