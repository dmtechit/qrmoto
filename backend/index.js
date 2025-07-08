const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
require('./db');

app.use(cors());
app.use(express.json());

const shipmentRoutes = require('./routes/shipmentRoutes');
app.use('/api/shipment', shipmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));