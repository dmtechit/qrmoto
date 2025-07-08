import React, { useState } from 'react';
import { validateShipment } from '../services/api';

function ValidationForm({ shipmentId }) {
  const [code, setCode] = useState('');

  const handleSubmit = async () => {
    const success = await validateShipment(shipmentId, code);
    if (success) alert("Entrega validada correctamente.");
    else alert("Código inválido.");
  };

  return (
    <div>
      <label>Validation Code</label>
      <input value={code} onChange={(e) => setCode(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default ValidationForm;