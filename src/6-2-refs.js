"use strict";

/**
 * Variables primitivas.
 */
let propiedades = {
  nombre: "<Pon tu nombre aquí>",
  curso: "Esenciales de JavaScript",
};

function tomarCurso(propiedades) {
  propiedades.curso = "Cocina";
  console.log(
    `Hola! ${propiedades.nombre}, has tomado el curso ${propiedades.curso}`
  );
}

/**
 * Playground.
 */
tomarCurso(propiedades);
console.log(propiedades.curso);
