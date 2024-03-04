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

    do {
        newX = getRandomCoordinates(data.settings.grid.columns);
        newY = getRandomCoordinates(data.settings.grid.rows);
    } while (data.coords.x === newX && data.coords.y === newY);
    data.coords.x = newX;
    data.coords.y = newY;
}

export function hitOffer() {
    data.scores.catchesCount++;
    jumpOfferToRandomPosition();

    clearInterval(jumpIntervalId);
    runOffer();

    callback();
}

function missOffer(){
    data.scores.missesCount++;
}

let jumpIntervalId;
function runOffer() {
    jumpIntervalId = setInterval(() => {
        jumpOfferToRandomPosition();
        missOffer();
        callback();
    }, 1000)
}

runOffer()