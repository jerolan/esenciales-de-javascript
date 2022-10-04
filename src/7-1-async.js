/**
 * Top level await solo están disponibles en archivos mjs.
 */
async function app() {
  let promise = fetch("https://api.github.com/users/codigofacilito");
  console.log(promise);

  let result = await promise
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((err) => console.error(err))
    .finally(() => console.info("cleanup"));
  console.log(result);
}

/**
 * Playground.
 */
app();
