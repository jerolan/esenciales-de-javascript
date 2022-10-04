let user = { name: "Jerome" };
let fallback = {
  inscribir() {
    return "Inscription automática a curso nuevo.";
  },
};

/**
 * Puede simplificar la forma de validar propiedades en objetos.
 * user.address != null && user.address.street != null
 */
if (user.address?.street == null) {
  console.error("dirección invalida");
}

let userAction = user?.cursos ?? fallback;

/**
 * Playground
 */
console.log(user.cursos?.[0]?.title);
console.log(user.cursos?.[0].inscribir?.());
console.log(`La preferencia del usuario es: ${userAction.inscribir()}`);
