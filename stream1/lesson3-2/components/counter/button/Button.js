export function Button(title, onClickCallback) {
  const buttonElement = document.createElement("button");

  buttonElement.append(title);
  buttonElement.addEventListener("click", onClickCallback);
  
  return buttonElement;
}