const {Router} = require('express');
const indexController = require('../controllers/indexController');

const indexRouter = Router();

indexRouter.get('/', indexController.renderMW);

module.exports = indexRouter;