import React from 'react';

function ShipmentDetails({ shipment }) {
  return (
    <div>
      <h3>Shipment Details</h3>
      <p><strong>Recipient:</strong> {shipment.recipient}</p>
      <p><strong>Address:</strong> {shipment.address}</p>
      <p><strong>Product:</strong> {shipment.product}</p>
    </div>
  );
}

export default ShipmentDetails;