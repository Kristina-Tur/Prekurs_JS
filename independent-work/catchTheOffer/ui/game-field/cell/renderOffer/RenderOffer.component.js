import {data, hitOffer} from "../../../../data/data.js";
export function RenderOffer () {
    const imgElement = document.createElement('img');
    imgElement.src = data.urlImg;

    /*let timeout;

    imgElement.addEventListener('mousedown', () => {
        timeout = setTimeout(() => {
            imgElement.src = data.urlImg1;
            hitOffer(true); // словленный offer

        }, 200);
    });

    imgElement.addEventListener('mouseup', () => {
        clearTimeout(timeout);
        hitOffer(false); // несловленный offer
    });*/
    let timeout;
    imgElement.addEventListener('click', () => {
        imgElement.src = data.urlImg1;
        timeout = setTimeout(() => {

            hitOffer(true); // словленный offer

        }, 200);

    })
    return imgElement;
}