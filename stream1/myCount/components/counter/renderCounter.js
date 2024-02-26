import { renderHeader } from "./header/renderHeader.js";
import { renderValue } from "./value/renderValue.js";
import { renderButton } from "./button/renderButton.js";

export function renderCounter() {
  document.body.innerHTML = "";

  document.body.append(renderHeader());
  document.body.append(renderValue());
  document.body.append(renderButton());
}

