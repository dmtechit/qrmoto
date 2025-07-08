const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
  recipient: String,
  address: String,
  product: String,
  validationCode: String,
  delivered: { type: Boolean, default: false },
  deliveryDate: Date
});

module.exports = mongoose.model('Shipment', shipmentSchema);