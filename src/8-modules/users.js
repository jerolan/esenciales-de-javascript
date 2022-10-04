async function getUsers() {
  return {
    name: "Jerome",
    balance: 100,
  };
}

const users = { getUsers };

/**
 * Único punto de entrada.
 */
export default users;
