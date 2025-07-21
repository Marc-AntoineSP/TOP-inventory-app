const {Router} = require('express');
const express = require('express');
const indexController = require('../controllers/indexController');

const indexRouter = Router();

indexRouter.get('/', indexController.getInventory, indexController.renderMW);
indexRouter.post('/order/:id/:quantity', express.urlencoded({extended: true}), indexController.getOrderFromButton, indexController.getComponentFromInventory)

module.exports = indexRouter;