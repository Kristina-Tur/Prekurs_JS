import { data } from "../../../data/data.js";

export function Value() {
  const countElement = document.createElement("div");
  countElement.append(data.count);
  return countElement;
}