
export function renderPlaylistTrack(track) {
  const tracksElement = document.createElement('ul');

  const trackElement = document.createElement('li');

  const trackCoverElement = document.createElement('img');
  trackCoverElement.src = track.trackCover;
  trackCoverElement.style.width = '50px';
  trackCoverElement.style.height = '50px';
  trackElement.append(trackCoverElement);


  const trackTitleElement = document.createElement("h4");
  trackTitleElement.append(track.title);
  trackElement.append(trackTitleElement);

  const trackAudioElement = document.createElement("audio");
  trackAudioElement.controls = true;
  trackAudioElement.src = track.audio;
  trackElement.append(trackAudioElement);

  tracksElement.append(trackElement);
  document.body.append(tracksElement);
}
