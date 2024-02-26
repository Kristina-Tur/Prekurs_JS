export function renderVideo(video) {
  const createElement = document.createElement("div");

  const videoFileElement = document.createElement("video");
  videoFileElement.src = video.fileUrl;
  videoFileElement.controls = true;
  createElement.append(videoFileElement);

  const descElement = document.createElement("p");
  descElement.append(video.description);
  createElement.append(descElement);

  const descElement2 = document.createElement("p");
  descElement2.append(video.youTubeChannel);
  createElement.append(descElement2);

  const descElement3 = document.createElement("p");
  descElement3.append(video.howLongAgo);
  createElement.append(descElement3);
  document.body.append(createElement);
}