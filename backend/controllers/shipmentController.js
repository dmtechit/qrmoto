const Shipment = require('../models/Shipment');

exports.getByQr = async (req, res) => {
  const { qrCode } = req.body;
  try {
    const shipment = await Shipment.findById(qrCode);
    if (!shipment) return res.status(404).json({ error: 'Envío no encontrado' });
    res.json(shipment);
  } catch (err) {
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

exports.validate = async (req, res) => {
  const { shipmentId, code } = req.body;
  try {
    const shipment = await Shipment.findById(shipmentId);
    if (!shipment) return res.status(404).json({ error: 'No encontrado' });

    if (shipment.validationCode === code && !shipment.delivered) {
      shipment.delivered = true;
      shipment.deliveryDate = new Date();
      await shipment.save();
      res.json({ success: true });
    } else {
      res.status(400).json({ success: false, error: 'Código inválido o ya entregado' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error del servidor' });
  }
};