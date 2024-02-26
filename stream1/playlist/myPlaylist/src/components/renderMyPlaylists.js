import { renderMyPlaylist } from "./playlist/renderMyPlaylist.js";
export function renderMyPlaylists(playlist) {
  for (let i = 0; i < playlist.length; i++) {
    renderMyPlaylist(playlist[i])
  }
}

