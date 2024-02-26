export function renderMyPlaylistHeader(playlistTitle) {
  const headerTitleElement = document.createElement("h1");
  headerTitleElement.append(playlistTitle);
  document.body.append(headerTitleElement)
}