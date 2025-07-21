const order_db = require('./db/orderQuery');
const express = require('express');
const indexRouter = require('./routes/indexRouter');

const app = express();

app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', indexRouter);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Listening on port ${port}!`));

const graceFulShutdown = async () => {
    server.close(async () => {
        console.log('SIG...')
        await order_db.clearTable();
        process.exit(0)});
    setTimeout(async () => {await order_db.clearTable(); process.exit(1)}, 2000 )
}
process.on('SIGINT', graceFulShutdown);
process.on('SIGTERM', graceFulShutdown);