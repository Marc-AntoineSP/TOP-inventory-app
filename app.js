const express = require('express');
const indexRouter = require('./routes/indexRouter');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', indexRouter);

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}!`))