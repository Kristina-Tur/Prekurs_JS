import { renderPlaylistTrack } from "../renderTracks/renderPlaylistTrack.component.js";
import { renderPlaylistHeader } from "../renderHeader/renderPlaylistHeader.component.js";


export function renderPlaylist(playlistForRendering) {
  renderPlaylistHeader(playlistForRendering.cover);

  for (let i = 0; i < playlistForRendering.tracksList.length; i++) {
    const track = playlistForRendering.tracksList[i];
    renderPlaylistTrack(track);
  }
}
