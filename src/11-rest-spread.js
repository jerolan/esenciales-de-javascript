let numeros = [10, 20];
let obj = { nombre: "Jerome", edad: 26 };

function suma(a, b) {
  return a + b;
}

let copiaDeNumeros = [...numeros, 30, 40];
let copiaDeObjeto = { ...obj, edad: 20 };

/**
 * Playground
 */
console.log(`El resultado de suma es: ${suma(...numeros)}`);
console.log(
  `Copiamos ${JSON.stringify(obj)} en ${JSON.stringify(copiaDeObjeto)}`
);
console.log(`Copiamos ${numeros} en ${copiaDeNumeros}`);
