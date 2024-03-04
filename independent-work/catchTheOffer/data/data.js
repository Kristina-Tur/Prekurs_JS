export const data = {
    scores: {
        catchesCount: 0,
        missesCount: 0,
    },
    coords: {
        x: 0,
        y: 0
    },
    settings: {
        grid: {
            columns: 3,
            rows: 3,
        },
    },
    urlImg: './assets/images/img.png'
}

function getRandomCoordinates(n) {
    return Math.floor(Math.random() * n)
}

let callback = null;

export function subscribe(subscriber) {
    callback = subscriber;
}

function jumpOfferToRandomPosition() {
    let newX = 0;
    let newY = 0;
    let newCoordsIsEqualOldCoords;

    do {
    data.coords.x = getRandomCoordinates(data.settings.grid.columns);
    data.coords.y = getRandomCoordinates(data.settings.grid.rows);
      newCoordsIsEqualOldCoords = data.coords.x === newX && data.coords.y === newY;
  } while(newCoordsIsEqualOldCoords);
    callback()
}
function runOffer(){
    setInterval(() => {
        jumpOfferToRandomPosition()
    }, 1000)
}
runOffer()

