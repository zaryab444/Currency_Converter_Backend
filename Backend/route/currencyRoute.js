// routes/currencyRoutes.js
const express = require('express');
const { convertCurrency } = require('../controller/currencyController');

const router = express.Router();

router.get('/convert', convertCurrency);

module.exports = router;