import React, { useState } from 'react';
import QRScanner from './components/QRScanner';
import ShipmentDetails from './components/ShipmentDetails';
import ValidationForm from './components/ValidationForm';

function App() {
  const [shipment, setShipment] = useState(null);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', padding: '40px' }}>
      <QRScanner setShipment={setShipment} />
      {shipment && (
        <div>
          <ShipmentDetails shipment={shipment} />
          <ValidationForm shipmentId={shipment._id} />
        </div>
      )}
    </div>
  );
}

export default App;