const colores = new Set();
colores.add("Rojo");
colores.add("Azul");
colores.add("Verde");
colores.add("Amarillo");
colores.add("Azul");  

const existeVerde = colores.has("Verde");

console.log(colores);
console.log(existeVerde); 
