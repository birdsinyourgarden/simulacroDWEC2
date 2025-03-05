## Ejercicio 6

Emparejando Guantes

Un grupo de trabajadores/as ha encontrado una caja llena de guantes desordenados. Cada guante tiene dos características:

type: Indica si el guante es izquierdo (I) o derecho (D).
size: Indica el tamaño del guante.
Tu tarea es ayudar a los trabajadores a emparejar los guantes del mismo tamaño que sean izquierdo y derecho. Para ello, debes devolver una lista con los tamaños de los pares de guantes emparejados.

Ten en cuenta que puede haber más de un par de guantes emparejados del mismo tamaño.

Ejemplo:

const gloves = [
  { type: 'I', size: 38 },
  { type: 'D', size: 38 },
  { type: 'D', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
];

organizeGloves(gloves);
// [38, 42]

const gloves2 = [
  { type: 'I', size: 38 },
  { type: 'D', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'D', size: 38 }
];

// [38, 38]

const gloves3 = [
  { type: 'I', size: 38 },
  { type: 'D', size: 36 },
  { type: 'D', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
];

organizeGloves(gloves3);
// []

Instrucciones:

Crea una función llamada organizeGloves que reciba un arreglo de objetos, donde cada objeto representa un guante con un type (I o D) y un size (número de tamaño).
La función debe devolver un arreglo con los tamaños de los pares de guantes emparejados. Un par es considerado cuando hay un guante izquierdo y un guante derecho del mismo tamaño.
Si no hay pares disponibles, la función debe devolver un arreglo vacío.