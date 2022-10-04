import users from "./users";
import math from "./math/math";

/**
 * Único punto de entrada.
 */
export default async function application() {
  console.log("Running application...");
  const user = await users.getUsers();
  console.log(`User ${JSON.stringify(user)}`);
  const newBalance = math.add(user.balance, 100);
  console.log(`User's new balance ${newBalance}`);
}

/**
 * Playground.
 */
application();
