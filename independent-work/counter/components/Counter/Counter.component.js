import { data } from "../../data/data.js";

export function Counter() {
  const counterElement = document.createElement('div');
  counterElement.append(data.count);
  return counterElement;
}