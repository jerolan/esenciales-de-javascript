/**
 * Top level await solo están disponibles en archivos mjs.
 */
async function app() {
  console.log("Primero");
  fetch("https://api.github.com/users/codigofacilito")
    .then(() => {
      console.log("Tercero");
    })
    .catch((err) => console.error(err))
    .finally(() => console.info("Cuarto"));
  console.log("Segundo");
}

/**
 * Playground.
 */
app();
