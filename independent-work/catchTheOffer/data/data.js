export const GAME_STATUSES = {
    SETTINGS: 'settings',
    IN_PROGRESS: 'in-progress',
    FINISH: 'finish'
}

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
    urlImg: './assets/images/img.png',
    catchesCountWin: 3,
    missesCountLose: 3,
    isButtonBlocked: false,
    gameStatus: GAME_STATUSES.IN_PROGRESS
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
    clearInterval(jumpIntervalId);
    data.scores.catchesCount++;

    if(data.scores.catchesCount === data.catchesCountWin){
        data.gameStatus = GAME_STATUSES.FINISH;
    }else{
        jumpOfferToRandomPosition();
        runOffer();
    }

    callback();
}

function missOffer() {
    data.scores.missesCount++;
    jumpOfferToRandomPosition();
    callback();
}

let jumpIntervalId;

function runOffer() {
    jumpIntervalId = setInterval(() => {
        missOffer();
    }, 1000)
}

export function restart(){
    data.scores.catchesCount = 0;
    data.scores.missesCount= 0;
    data.coords.x = 0;
    data.coords.y = 0;
    data.gameStatus = GAME_STATUSES.IN_PROGRESS;
    callback();
    data.isButtonBlocked = false
}

export function start(){
    if(data.isButtonBlocked){
        return
    }
    data.gameStatus = GAME_STATUSES.IN_PROGRESS;
    runOffer()
    data.isButtonBlocked = true
}

export function pause() {
    clearInterval(jumpIntervalId);
    data.isButtonBlocked = false
}
