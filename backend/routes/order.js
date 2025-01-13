const express = require('express');
const { postOrders } = require('../controllers/orderController');

const router = express.Router();

router.route('/orders').post(postOrders);

module.exports= router;