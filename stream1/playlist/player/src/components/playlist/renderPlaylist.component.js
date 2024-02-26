import { renderPlayListHeader } from "./header/renderPlaylistHeader.component.js";
import { renderPlayListTracks } from "./tracks/renderPlaylistTracks.component.js";

export function renderPlaylist(inputPlayList) {
  renderPlayListHeader(inputPlayList);
  renderPlayListTracks(inputPlayList.tracks);
}

