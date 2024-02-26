import { renderPlaylist } from "./playlist/renderPlaylist.component.js";

export function renderPlaylists(inputPlayLists) {
  for (let i = 0; i < inputPlayLists.length; i++) {
    const playlist = inputPlayLists[i]
    renderPlaylist(playlist)
  }
}