/**
 * Descomenta la siguiente linea para habilitar el modo estricto.
 */
// "use strict";

let objA = {
  numbers: [1, 2, 3],
  print() {
    this.numbers.forEach(function () {
      /**
       * Importante: Cuando se está ejecutando en modo estricto,
       * de otra forma this, haría referencia a Window.
       */
      console.log(this);
    });
  },
};

let objB = {
  numbers: [1, 2, 3],
  print() {
    this.numbers.forEach(() => {
      console.log(this);
    });
  },
};

/**
 * Playground.
 */
objA.print();
objB.print();
