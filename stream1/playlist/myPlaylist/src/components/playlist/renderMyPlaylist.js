import { renderMyPlaylistHeader } from "./header/renderMyPlaylistHeader.js";
import { renderMyPlaylistVideoTitle } from "./videos/renderMyPlaylistVideoTitle.js";
import { renderMyPlaylistVideos } from "./videos/renderMyPlaylistVideos.js";

export function renderMyPlaylist(playlist) {
  renderMyPlaylistHeader(playlist.title);
  renderMyPlaylistVideoTitle(playlist.videoInfo.title)
  renderMyPlaylistVideos(playlist.videoInfo.videos);
}