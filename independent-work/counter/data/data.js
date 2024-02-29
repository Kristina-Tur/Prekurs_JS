/* import { renderCounter } from "../components/renderCounter.js";

 */export const data = {
  title: 'Counter',
  count: 0
}

counterStart();

let callback = null;

export function subscribe(subscriber) {
  callback = subscriber;
}

export function incrementCounterOnButton () {
  data.count++;
  callback();
}

export function decrementCounterOnButton () {
  data.count--;
  callback();
}

function counterStart() {
  setInterval(function () {
  data.count++;
    callback();
}, 1000);
}
