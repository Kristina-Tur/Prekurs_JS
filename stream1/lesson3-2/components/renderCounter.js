import { Header } from "./counter/header/Header.js";
import { Value } from "./counter/value/Value.js";
import { Button } from "./counter/button/Button.js";
import { decreaseDataCount, increaseDataCount } from "../data/data.js";

export function renderCounter() {
  document.body.innerHTML = "";

  document.body.append(Header());
  document.body.append(Value());
  document.body.append(Button("+", increaseDataCount));
  document.body.append(Button("-", decreaseDataCount));
}