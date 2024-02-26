export function Header(title) {
  const titleElement = document.createElement('h2');
  titleElement.append(title);
  return titleElement;
}