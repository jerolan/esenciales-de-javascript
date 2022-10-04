import { protectedStuff } from "./internal";

export default function add(a, b) {
  protectedStuff();
  return a + b;
}
