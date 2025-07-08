import React from 'react';
import { getShipmentByQRCode } from '../services/api';

function QRScanner({ setShipment }) {
  const handleLoad = async () => {
    const fakeQr = "66c377a64c1b5f2e8a1c1234"; // Simulación
    const shipment = await getShipmentByQRCode(fakeQr);
    setShipment(shipment);
  };

  return (
    <div>
      <h3>Upload QR Code</h3>
      <button onClick={handleLoad}>Load Shipment</button>
    </div>
  );
}

export default QRScanner;