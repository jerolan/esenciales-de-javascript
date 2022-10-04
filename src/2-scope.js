/**
 * Global
 *
 * El alcance global es el que ocurre donde nuestra aplicación está siendo ejecutada.
 * Básicamente es la raíz de nuestro script, donde creamos las primeras declaraciones
 * y expresiones.
 */
let nombre = "<Pon tu nombre aquí>";
let curso = "Esenciales de JavaScript";

function tomarCurso() {
  /**
   * El alcance local es aquel que ocurre dentro de la ejecución
   * de una función y solo son visibles dentro de su ejecución.
   */
  /**
   * Descomenta la siguiente linea y
   * veras que ahora estas tomando una clase de cocina.
   */
  // curso = "Cocina";
  let canal = "Código facilito";
  console.log(
    `Hola! ${nombre}, has tomado el curso ${curso} a través de ${canal}`
  );
}

function reproducirVideo() {
  curso = "Matemáticas";
  console.log(`Has reproducido el video para el curso ${curso}`);
}

/**
 * Descomenta esta linea y veras
 * ReferenceError: canal is not defined
 */
// console.log(canal);

/**
 * Playground.
 */
tomarCurso();
// reproducirVideo();
