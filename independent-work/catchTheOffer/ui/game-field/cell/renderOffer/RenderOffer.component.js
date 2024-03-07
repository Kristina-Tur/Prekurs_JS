import {hitOffer} from "../../../../data/data.js";

export function RenderOffer() {
    const imgElement = document.createElement('img');
    imgElement.src = './assets/images/img.png';
    imgElement.addEventListener('click', () => {
        hitOffer();
    })
    return imgElement;
}
export function CatchOffer(){
    const imgElement = document.createElement('img');
    imgElement.src = './assets/images/catchOffer.png';
    return imgElement;
}
export function MissedOffer(){
    const imgElement = document.createElement('img');
    imgElement.src = './assets/images/missOffer.png';
    return imgElement;
}
