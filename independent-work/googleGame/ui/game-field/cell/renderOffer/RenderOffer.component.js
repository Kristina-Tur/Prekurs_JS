import {catchGoogle} from "../../../../data/data.js";

export function RenderGoogle() {
    const imgElement = document.createElement('img');
    imgElement.src = './assets/images/google.png';
    imgElement.addEventListener('click', () => {
        catchGoogle()
    })
    return imgElement;
}
export function Player1(){
    const imgElement = document.createElement('img');
    imgElement.src = './assets/images/player1.png';
    return imgElement;
}
export function Player2(){
    const imgElement = document.createElement('img');
    imgElement.src = './assets/images/player2.png';
    return imgElement;
}
