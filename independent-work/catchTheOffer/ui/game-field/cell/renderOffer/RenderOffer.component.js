import {data, hitOffer} from "../../../../data/data.js";

export function RenderOffer() {
    const imgElement = document.createElement('img');
    imgElement.src = data.urlImg;
    imgElement.addEventListener('click', () => {
        hitOffer();
    })
    return imgElement;
}
export function CatchOffer(){
    const imgElement = document.createElement('img');
    imgElement.src = data.urlImg1;
    setTimeout(() => {
        imgElement.remove();
    }, 200);
    return imgElement;
}
export function MissedOffer(){
    const imgElement = document.createElement('img');
    imgElement.src = data.urlImg2;
    imgElement.addEventListener('click', () => {
        setTimeout(() => {
            imgElement.remove();
        }, 200);
    })
    return imgElement;
}
