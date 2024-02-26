import { renderPlayListTrack } from "./track/renderPlaylistTrack.component.js";

export function renderPlayListTracks(inputTracks) {
  for (let i = 0; i < inputTracks.length; i++) {
    const track = inputTracks[i];
    renderPlayListTrack(track);
  }
}

