const array = [1, 2, 3];
const obj = { nombre: "Jerome", edad: 26 };

/**
 * Las propiedades se pueden usar o cambiar como nombres de variables.
 * Esta no mutara el objeto.
 */
const { nombre: primerNombre, edad } = obj;
const [uno, dos, tres] = array;

/**
 * Playground
 */
console.log({ obj, primerNombre, edad });
console.log(`array[${array}] = ${uno}, ${dos} y ${tres}`);
