// let nombre = "Jerome";
// let mensaje = `
// Hola, los saluda ${nombre},
// Gracias por estar en este curso.`;

// console.log(mensaje);

const nombre = "Jerome";
const edad = 26;

function myTag(strings, nombre, edad) {
  const mensaje = edad > 99 ? "no tan joven" : "joven";
  return `${nombre}${strings[1]}${mensaje}`;
}

myTag`${nombre} es ${edad}.`;

console.log(output);
// That Mike is a youngster.
