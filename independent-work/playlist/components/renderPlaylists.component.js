import { renderPlaylist } from "./renderPlaylist/renderPlaylist.component.js";

export function renderPlaylists(playlistsForRendering) {
  for (let i = 0; i < playlistsForRendering.length; i++) {
    const playlist = playlistsForRendering[i];
    renderPlaylist(playlist);
  }
}
