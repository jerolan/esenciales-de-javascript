const nombre = "<Pon tu nombre aquí>";
const edad = 26;

/**
 * Puedes procesar el string, con cada uno de los parametros que fue interpolado.
 */
function myTag(strings, nombre, edad) {
  const mensaje = edad > 99 ? "no tan joven" : "joven";
  return `${nombre}${strings[1]}${mensaje}`;
}

/**
 * Playground.
 */
console.log(`Hola, ${nombre}.
--
Gracias por estar en este curso.`);
console.log(myTag`${nombre} es ${edad}.`);
