import { catchOffer } from "../../../../../data.js";

export function offerToMade() {
  const imgElement = document.createElement('img');
  imgElement.src = './assets/images/Layer 1.png';

  function clickHandler() {
    catchOffer()
  }

  imgElement.addEventListener('click', clickHandler)

  return imgElement;
}
