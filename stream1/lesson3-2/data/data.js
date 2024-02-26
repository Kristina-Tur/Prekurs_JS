export const data = {
  title: "Counter",
  count: 0
}

let changeDataCallback = function () {
}

// каждую секунду будем увеличивать data.count 
setInterval(function () {
  data.count++;
  // и затем перерисовывать весь счётчик 
  //renderCounter(data);
  changeDataCallback()
}, 1000);

export function setChangeDataCallback(newCallback) {
  changeDataCallback = newCallback
}

export function increaseDataCount() {
  data.count++;
  changeDataCallback()
}

export function decreaseDataCount() {
  data.count--;
  changeDataCallback()
}