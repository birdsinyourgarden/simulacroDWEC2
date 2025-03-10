import React from 'react';

const Stock = ({ producto, cantidad, maximo }) => {
  const porcentaje = (cantidad / maximo) * 100;

  let color;
  if (porcentaje < 10) {
    color = 'red'; 
  } else if (porcentaje >= 10 && porcentaje < 25) {
    color = 'orange'; 
  } else if (porcentaje >= 25 && porcentaje < 40) {
    color = 'yellow'; 
  } else {
    color = 'green';
  }

  return (
    <li style={{ color }}>
      {producto}: {cantidad} / {maximo}
    </li>
  );
};

export default Stock;
