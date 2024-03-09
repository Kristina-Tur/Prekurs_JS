export const GAME_STATUSES = {
    SETTINGS: 'settings',
    IN_PROGRESS: 'in-progress',
    FINISH: 'finish'
}

const data = {
    scores: {
        catchesCount: 0,
        missesCount: 0,
    },
    coords: {
        x: 0,
        y: 0
    },
    players: [{x: 1, y: 1}, {x: 2, y: 2}],
    settings: {
        gridSize: {
            columns: 5,
            rows: 5,
        },
        pointsWin: 3,
        maximumMisses: 400
    },
    isButtonBlocked: false,
    gameStatus: GAME_STATUSES.IN_PROGRESS
}

function getRandomCoordinates(n) {
    return Math.floor(Math.random() * n)
}

let listener = null;

export function subscribe(subscriber) {
    listener = subscriber;
}

function jumpGoogleToRandomPosition() {
    let newX = 0;
    let newY = 0;

    do {
        newX = getRandomCoordinates(data.settings.gridSize.columns);
        newY = getRandomCoordinates(data.settings.gridSize.rows);
    } while (data.coords.x === newX && data.coords.y === newY);
    data.coords.x = newX;
    data.coords.y = newY;
}

export function catchGoogle() {
    clearInterval(jumpIntervalId);
    data.scores.catchesCount++;

    if (data.scores.catchesCount === data.settings.pointsWin) {
        data.gameStatus = GAME_STATUSES.FINISH;
    } else {
        jumpGoogleToRandomPosition();
        runGoogle();
    }
    listener();
}

function missGoogle() {
    data.scores.missesCount++;
    if (data.scores.missesCount === data.settings.maximumMisses) {
        data.gameStatus = GAME_STATUSES.FINISH;
    } else {
        jumpGoogleToRandomPosition();
    }
    listener();
}

let jumpIntervalId;

function runGoogle() {
    jumpIntervalId = setInterval(() => {
        missGoogle();
    }, 1000)
}

export function restart() {
    data.scores.catchesCount = 0;
    data.scores.missesCount = 0;
    data.coords.x = 0;
    data.coords.y = 0;
    data.gameStatus = GAME_STATUSES.IN_PROGRESS;
    data.isButtonBlocked = false;
    listener();
}

export function start() {
    if (data.isButtonBlocked) {
        return
    }
    data.gameStatus = GAME_STATUSES.IN_PROGRESS;
    runGoogle();
    data.isButtonBlocked = true
}

export function pause() {
    clearInterval(jumpIntervalId);
    data.isButtonBlocked = false
}

function movePlayer(delta, player) {
    const newX = player.x + delta.x;
    const newY = player.y + delta.y;

    if (!isNewCoordsInsideGrid(newX, newY)) return false;
    if (!isCellOfGridIsFree(newX, newY)) return false;

    player.x = newX;
    player.y = newY;

    listener();
}

function isNewCoordsInsideGrid(x, y) {
    return !(x < 0 ||
        x >= data.settings.gridSize.columns ||
        y < 0 ||
        y >= data.settings.gridSize.rows);
}

function isCellOfGridIsFree(newX, newY) {
    if (newX === data.players[0].x && newY === data.players[0].y) return false;
    if (newX === data.players[1].x && newY === data.players[1].y) return false;
    return true;
}

export function movePlayer1Up() {
    movePlayer({x: 0, y: -1}, data.players[0])
}

export function movePlayer1Down() {
    movePlayer({x: 0, y: 1}, data.players[0])
}

export function movePlayer1Left() {
    movePlayer({x: -1, y: 0}, data.players[0])
}

export function movePlayer1Right() {
    movePlayer({x: 1, y: 0}, data.players[0])
}

//selectors/ getter

export function getScores() {
    return {
        catchesCount: data.scores.catchesCount,
        missesCount: data.scores.missesCount
    }
}

export function getGooglePosition() {
    return {
        x: data.coords.x,
        y: data.coords.y
    }
}

export function getPlayer1Position() {
    return {
        x: data.players[0].x,
        y: data.players[0].y
    }
}

export function getPlayer2Position() {
    return {
        x: data.players[1].x,
        y: data.players[1].y
    }
}

export function getSettings() {
    return {
        columns: data.settings.gridSize.columns,
        rows: data.settings.gridSize.rows,
        pointsWin: data.settings.pointsWin,
        maximumMisses: data.settings.maximumMisses
    }
}

export function getGameStatus() {
    return data.gameStatus
}