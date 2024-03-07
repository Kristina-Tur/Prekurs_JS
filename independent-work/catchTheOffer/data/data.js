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
        gridSize: {
            columns: 3,
            rows: 3,
        },
        pointsWin: 3,
        maximumMisses: 4
    },
    missedOffer: null,
    catchOffer: null,
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
        newX = getRandomCoordinates(data.settings.gridSize.columns);
        newY = getRandomCoordinates(data.settings.gridSize.rows);
    } while (data.coords.x === newX && data.coords.y === newY);
    data.coords.x = newX;
    data.coords.y = newY;
}

export function hitOffer() {
    clearInterval(jumpIntervalId);
    data.scores.catchesCount++;

    if(data.scores.catchesCount === data.settings.pointsWin){
        data.gameStatus = GAME_STATUSES.FINISH;
    }else{
        setCaughtOffer(data.coords.x, data.coords.y);
        setTimeout((() => {
            clearCaughtOffer();
            callback();
        }), 200);
        jumpOfferToRandomPosition();
        runOffer();
    }

    callback();
}

function missOffer() {
    data.scores.missesCount++;
    if(data.scores.missesCount === data.settings.maximumMisses){
        data.gameStatus = GAME_STATUSES.FINISH;
    }else{
        setMissedOffer(data.coords.x, data.coords.y);
        setTimeout((() => {
            clearMissedOffer();
            callback();
        }), 200);
        jumpOfferToRandomPosition();
    }
    callback();
}

let jumpIntervalId;

function runOffer() {
    jumpIntervalId = setInterval(() => {
        missOffer();
    }, 3000)
}

export function restart(){
    data.scores.catchesCount = 0;
    data.scores.missesCount= 0;
    data.coords.x = 0;
    data.coords.y = 0;
    data.gameStatus = GAME_STATUSES.IN_PROGRESS;
    data.isButtonBlocked = false;
    callback();
}

export function start(){
    if(data.isButtonBlocked){
        return
    }
    data.gameStatus = GAME_STATUSES.IN_PROGRESS;
    runOffer();
    data.isButtonBlocked = true
}

export function pause() {
    clearInterval(jumpIntervalId);
    data.isButtonBlocked = false
}

function setCaughtOffer (x, y){
    data.catchOffer = {x, y}
}
function clearCaughtOffer (){
    data.catchOffer = null;
}
function setMissedOffer (x, y){
    data.missedOffer = {x, y}
}

function clearMissedOffer (){
    data.missedOffer = null;
}
