const express = require('express');
const router = express.Router();
const { getByQr, validate } = require('../controllers/shipmentController');

router.post('/scanQR', getByQr);
router.post('/validate', validate);

module.exports = router;