import React, { useState } from 'react';

const CambiadorDeColor = () => {
  const [color, setColor] = useState('red');
  const cambiarColor = () => {
    const colores = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];   
    const nuevoColor = colores[Math.floor(Math.random() * colores.length)];    
    setColor(nuevoColor);
  };

  return (
    <div>
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: color,
          marginBottom: '20px',
        }}
      >
      </div>
      <button onClick={cambiarColor}>Cambiar color</button>
    </div>
  );
};

export default CambiadorDeColor;
