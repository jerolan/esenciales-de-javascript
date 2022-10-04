/**
 * Let y const sólo podrán ser “vistas” dentro del bloque donde se declararon
 * mientras que Var podrá ser “vista” por todo el bloque que la función haya creado.
 */
function imprimirSecreto(clave) {
  if (clave === "supersecreta") {
    /**
     * Convierte el secreto de var a let.
     * Finalmente puedes usar const y mirar el mismo efecto.
     */
    // let secreto = "42";
    var secreto = "42";
  }

  console.log(`El secreto es ${secreto}`);
}

/**
 * Playground.
 */
imprimirSecreto("supersecreta");
