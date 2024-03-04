import {data} from "../../../../data/data.js";
export function RenderOffer () {
    const imgElement = document.createElement('img');
    imgElement.src = data.urlImg;
    return imgElement;
}