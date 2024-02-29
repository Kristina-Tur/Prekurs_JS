export function Header(title) {
  const titleElement = document.createElement('h1');
  titleElement.append(title);
  return titleElement;
}