export const data = [
  {
    id: createId(),
    title: 'Learn HTML'
  },
  {
    id: createId(),
    title: 'Learn CSS'
  },
  {
    id: createId(),
    title: 'Learn JS'
  },
  {
    id: createId(),
    title: 'Learn React'
  },
]

function createId() {
  return Math.floor(Math.random() * 10000)
}

let callback = null;

export function subscribe(subscriber) {
  callback = subscriber;
}

export function addItem() {
  const newItem = {
    id: createId(),
    title: '-----'
  }
  data.push(newItem)
  callback()
}