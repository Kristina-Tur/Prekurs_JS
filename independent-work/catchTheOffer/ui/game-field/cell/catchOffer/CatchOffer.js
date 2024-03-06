import {data, hitOffer} from "../../../../data/data.js";

export function CatchOffer(){
    const imgElement = document.createElement('img');

    imgElement.addEventListener('click', () => {
            hitOffer();
    })
    return imgElement;
}