export function Counter(counter) {
  const counterElement = document.createElement('div');
  counterElement.append(counter);
  return counterElement;
}