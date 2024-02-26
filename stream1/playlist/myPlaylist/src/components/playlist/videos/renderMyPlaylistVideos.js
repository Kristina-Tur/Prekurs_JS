import { renderVideo } from "./video/renderVideo.js"

export function renderMyPlaylistVideos(videos) {
  for (let i = 0; i < videos.length; i++) {
    renderVideo(videos[i])
  }
}