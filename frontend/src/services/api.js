const API_URL = 'http://localhost:5000/api/shipment';

export async function getShipmentByQRCode(qrCode) {
  const res = await fetch(`${API_URL}/scanQR`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ qrCode }),
  });
  return await res.json();
}

export async function validateShipment(shipmentId, code) {
  const res = await fetch(`${API_URL}/validate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ shipmentId, code }),
  });
  const data = await res.json();
  return data.success;
}