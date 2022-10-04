import { protectedStuff, protectedStuffPlus } from "./internal";

export default function add(a, b) {
  protectedStuff();
  protectedStuffPlus();
  return a + b;
}
