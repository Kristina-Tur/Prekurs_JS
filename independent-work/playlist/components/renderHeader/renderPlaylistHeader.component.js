
export function renderPlaylistHeader(header) {
  const playlistTitleElement = document.createElement('h1');
  playlistTitleElement.append(header.title);
  document.body.append(playlistTitleElement);

  const playlistCoverElement = document.createElement('img');
  playlistCoverElement.src = header.albumСover;
  document.body.append(playlistCoverElement);
}
