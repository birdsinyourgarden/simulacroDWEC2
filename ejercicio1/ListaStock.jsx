import React from 'react';
import Stock from './Stock';

const ListaStock = ({ productos }) => {
  return (
    <ul>
      {productos.map((producto, index) => (
        <Stock
          key={index}
          producto={producto.producto}
          cantidad={producto.cantidad}
          maximo={producto.maximo}
        />
      ))}
    </ul>
  );
};

export default ListaStock;
