/**
 * La declaración de una función define una función con sus parámetros.
 * Usamos la palabra clave `function`.
 *
 * Intenta descomentar la siguiente linea de código.
 * Mira `ƒ saludar() {}` imprimirse en la consola.
 */
// console.log(saludar);
function saludar() {
  console.log("Hola mundo");
}

/**
 * A diferencia de las declaraciones, aquí las funciones se crean dentro de expresiones.
 *
 * Intenta descomentar la siguiente linea de código.
 * Mira `undefined` imprimirse en la consola.
 */
// console.log(saludar);
// let saludar = function saludar2() {
//   console.log("Hola mundo");
//   imprimirNombreDeFuncion(saludar2);
// };

let imprimirNombreDeFuncion = (fn) => {
  console.log(fn.name);
};

/**
 * Playground.
 */
saludar();
// imprimirNombreDeFuncion(saludar);
