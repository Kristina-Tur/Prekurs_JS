export function renderPlayListTrack(inputTracks) {
  const createElement = document.createElement("div");

  const coverElement = document.createElement("img");
  coverElement.src = inputTracks.coverImageUrl;
  coverElement.style.width = "100px";
  coverElement.style.height = "100px";
  createElement.append(coverElement);

  if (inputTracks.inTrend) {
    createElement.append("🔥")
  }

  const titleElement = document.createElement("div");
  titleElement.append(inputTracks.artistName + " - " + inputTracks.title);
  createElement.append(titleElement);

  const audioElement = document.createElement("audio");
  audioElement.src = inputTracks.fileUrl;
  audioElement.controls = true;
  createElement.append(audioElement);

  document.body.append(createElement)
}