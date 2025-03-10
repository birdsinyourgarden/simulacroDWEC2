import React from 'react';
import ListaStock from './ListaStock';

const productos = [
  { producto: 'Chocolates', cantidad: 34, maximo: 100 },
  { producto: 'Caramelos', cantidad: 99, maximo: 200 },
  { producto: 'Turrones', cantidad: 3, maximo: 50 },
  { producto: 'Alfajores', cantidad: 25, maximo: 130 },
  { producto: 'Tortas', cantidad: 9, maximo: 10 },
];

function App() {
  return (
    <div>
      <h1>Lista de Stock</h1>
      <ListaStock productos={productos} />
    </div>
  );
}

export default App;
