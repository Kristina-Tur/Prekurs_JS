import {data, hitOffer} from "../../../../data/data.js";
export function RenderOffer () {
    const imgElement = document.createElement('img');
    imgElement.src = data.urlImg;

    imgElement.addEventListener('click', () => {
        hitOffer()
    })
    return imgElement;
}