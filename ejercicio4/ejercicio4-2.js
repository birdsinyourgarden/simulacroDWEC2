const edades = new Map();
edades.set("Juan", 25);
edades.set("María", 30);
edades.set("Carlos", 28);

const edadMaria = edades.get("María");

edades.delete("Carlos");

console.log(edades); 
console.log(edadMaria); 
