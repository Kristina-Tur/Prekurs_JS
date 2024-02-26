export const data = {
  scorePoints: 0,
  missPoints: 0,
  winPoints: 5,
  win: false,
  x: 0,
  y: 0,
  rowsCount: 3,
  columnCount: 3,
}

let listener = null;
export function subscribe(observer) {
  listener = observer;
}


function getRandomInt(n) {
  return Math.floor(Math.random() * n)
}


function changeOfferCoordinates() {
  let newX = 0;
  let newY = 0;
  let newCoordsIsEqualOldCoords;

  do {
    newX = getRandomInt(data.columnCount);
    newY = getRandomInt(data.rowsCount);
    newCoordsIsEqualOldCoords = newX === data.x && newY === data.y;
  } while (newCoordsIsEqualOldCoords);

  data.x = newX;
  data.y = newY;
}

let OfferJumpIntervalId;
function runOfferJumpInterval() {
  clearInterval(OfferJumpIntervalId)
  OfferJumpIntervalId = setInterval(missOffer, 3000);
}
runOfferJumpInterval();


export function catchOffer() {
  data.scorePoints++;
  if (data.scorePoints == data.winPoints) {
    data.win = true;
    clearInterval(OfferJumpIntervalId);
  } else {
    changeOfferCoordinates();
    runOfferJumpInterval();
  }
  listener();
}

function missOffer() {
  data.missPoints++;
  changeOfferCoordinates();
  listener()
}

export function restart() {
  data.scorePoints = 0;
  data.missPoints = 0;
  data.x = 0;
  data.y = 0;
  data.win = false;
  runOfferJumpInterval();
  listener()
}