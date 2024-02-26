export function renderMyPlaylistVideoTitle(playlistInfoTitle) {
  const titleElement = document.createElement("h2");
  titleElement.append(playlistInfoTitle);
  document.body.append(titleElement);
}