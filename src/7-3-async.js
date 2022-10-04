/**
 * Mock de algunos servicios
 */
const wait = (name) =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log(name);
      return resolve();
    }, 100)
  );

const validarPeticion = () => wait("validarPeticion");
const formatearEmail = () => wait("formatearEmail");
const formatearResultado = () => wait("formatearResultado");
const actualizarDatosDeUsuario = () => wait("actualizarDatosDeUsuario");
const enviarCorreo = async () => {
  console.log("enviarCorreo");
  throw new Error();
};

/**
 * Composición de un proceso complejo con chain.
 */
const proceso = () =>
  validarPeticion()
    .then(formatearEmail)
    .then(actualizarDatosDeUsuario)
    .then(() => enviarCorreo().catch(() => console.warn("Fallo correo")))
    .then(formatearResultado)
    .then(() => console.log("Fin de proceso"))
    .catch(() => console.error("Fallo"))
    .finally(() => console.log("Limpiar proceso"));

/**
 * Composición de un proceso complejo de forma imperativa.
 */
// const proceso = async () => {
//   try {
//     await validarPeticion();
//     await formatearEmail();
//     await actualizarDatosDeUsuario();

//     try {
//       await enviarCorreo();
//     } catch (err) {
//       console.warn("Fallo correo");
//     }

//     await formatearResultado();
//     console.log("Fin de proceso");
//   } catch (err) {
//     console.error("Fallo");
//   } finally {
//     console.log("Limpiar proceso");
//   }
// };

/**
 * Playground.
 */
proceso();
