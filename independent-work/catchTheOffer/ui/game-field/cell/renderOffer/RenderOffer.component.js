import {data, hitOffer} from "../../../../data/data.js";

export function RenderOffer() {
    const imgElement = document.createElement('img');
    imgElement.src = data.urlImg;
    let timeout;

    imgElement.addEventListener('click', () => {
        imgElement.src = data.urlImg1;
        timeout = setTimeout(() => {
            hitOffer();
        }, 200);
    })
    return imgElement;
}