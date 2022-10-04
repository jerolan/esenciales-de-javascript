/**
 * Descomenta la siguiente linea para habilitar el modo estricto.
 */
// "use strict";

let application = {
  execute() {
    console.log("Dentro de application el contexto es: ", this);

    function obtenerNombre() {
      /**
       * Importante: Cuando se está ejecutando en modo estricto,
       * de otra forma this, haría referencia a Window.
       */
      console.log("Dentro de obtenerNombre el contexto es: ", this);
    }

    obtenerNombre();
  },
};

/**
 * Version super simplificada del browser que ejecuta nuestra app.
 */
let applicationRuntime = {
  run() {
    console.log("Dentro de runtime el contexto es: ", this);
    application.execute();
  },
};

/**
 * Playground.
 */
applicationRuntime.run("supersecreta");
