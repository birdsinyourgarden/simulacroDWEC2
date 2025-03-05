## Ejercicio 5

Vamos a realizar promesas en JavaScript, y cómo encadenarlas para realizar una serie de tareas asíncronas. En este caso, simularemos el proceso de construcción de una casa en tres pasos: Excavar, Construir Estructura, y Pintar Casa.

1. Simula el proceso de construcción de una casa con tres pasos:
* Excavar: Simula que toma 4 segundos.
* Construir Estructura: Simula que toma 5 segundos.
* Pintar Casa: Simula que toma 3 segundos.
2. Cada función debe devolver una promesa que se resuelva después de cierto tiempo, y el siguiente paso debe comenzar solo después de que el paso anterior se haya completado.
3. Usa .then() para encadenar las promesas de manera que el siguiente paso dependa del anterior.
4. Al finalizar, muestra un mensaje indicando que la construcción de la casa ha terminado y la casa está lista para mudarse.