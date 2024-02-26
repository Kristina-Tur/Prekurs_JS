export const data = {
  clientsCounter: 0
}

let callback = function () {
  
}

// каждую секунду будем увеличивать data.count 
setInterval(function () {
  data.clientsCounter++;
  // и затем перерисовывать весь счётчик 
  callback();
}, 1000);

export function setCallback(newCallback) {
  callback = newCallback;
}

export function clickOnButton() {
  data.clientsCounter++;
  callback()
}
