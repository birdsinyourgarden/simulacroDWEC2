## Ejercicio 1

Crear un componente Stock que tome como props producto (string correspondiente a nombre), cantidad (número) y maximo (número), y renderice un elemento li que: - si la cantidad es menor al 10% de maximo, ponga el texto en rojo - si la cantidad es mayor a 10% de maximoy menor al 25% de maximo, ponga el texto en naranja - si la cantidad es mayor al 25% de maximo y menor al 40% de maximo, ponga el texto en amarillo - si la cantidad es mayor al 40% de maximo, ponga el texto en verde.

Crear un componente ListaStock que tome una lista de productos y renderice un ul con un array de Stock por cada ítem de la lista. Ejemplo de lista:

const productos = [
  {producto: 'Chocolates', cantidad: 34, maximo: 100},
  {producto: 'Caramelos', cantidad: 99, maximo: 200},
  {producto: 'Turrones', cantidad: 3, maximo: 50},
  {producto: 'Alfajores', cantidad: 25, maximo: 130},
  {producto: 'Tortas', cantidad: 9, maximo: 10},
]