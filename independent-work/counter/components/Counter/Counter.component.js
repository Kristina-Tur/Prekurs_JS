export function Counter(count) {
  const counterElement = document.createElement('div');
  counterElement.append(count);
  return counterElement;
}