import { data } from "../../../../data.js";
import { offerToMade } from "./offer/offer.component.js";

export function Cell(x, y) {
  const cellElement = document.createElement('td');
  if (x === data.x && y === data.y) {
    cellElement.append(offerToMade());
  }
  return cellElement;
}


