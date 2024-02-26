export const data = {
  clientsCount: 0
}

let callback = function () {}


// каждую секунду будем увеличивать data.count 
setInterval(function () {
  data.clientsCount++;
  // и затем перерисовывать весь счётчик 
  callback();
}, 1000);

export function setCallback(newCallback) {
  callback = newCallback;
}

export function increaseClientsCount() {
  data.clientsCount++;
  callback();
}
