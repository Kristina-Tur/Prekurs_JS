export let data = {
  tasks: [
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
    }
  ],
  isDialogWindowOpen: false
}

export function openDialogWindow() {
  data.isDialogWindowOpen = open;
  callback()
}

export function closeDialogWindow() {
  data.isDialogWindowOpen = false;
  callback()
}

function createId() {
  return Math.floor(Math.random() * 10000)
}

let callback = null;

export function subscribe(subscriber) {
  callback = subscriber;
}

export function addItem(title) {
  const newItem = {
    id: createId(),
    title: title
  }
  data.tasks.push(newItem);
  callback()
}

export function deleteItem(itemId) {
  data.tasks = data.tasks.filter((obj) => obj.id !== itemId);
  callback();
}

export function modificationInput() {
  
}