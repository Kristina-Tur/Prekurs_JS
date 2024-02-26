import { clickOnButton } from "../../../data/data.js";

export function renderButton() {
  const element = document.createElement("button");
  element.append("+");
  element.addEventListener('click', clickOnButton)
  return element;
}