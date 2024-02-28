const header = {
  cover: {
    title: 'Beyonce – Diva',
    albumСover: './assets/images/ae5dabea04cba4ce60fa41dfaf36eec_large.png'
  },
  tracksList: [
    {
      trackCover: './assets/images/ae5dabea04cba4ce60fa41dfaf36eec_large.png',
      title: 'Beyonce – Brak My Soul',
      audio: './assets/tracks/beyonce.mp3'
    },
    {
      trackCover: './assets/images/ae5dabea04cba4ce60fa41dfaf36eec_large.png',
      title: 'Beyonce – Spirit',
      audio: './assets/tracks/BeyoncéMine(FeatDrake).mp3'
    }
  ]
}

renderPlaylist(header)

function renderPlaylist(playlistForRendering) {
  renderPlaylistHeader(playlistForRendering.cover);
  renderPlaylistTrack(playlistForRendering.tracksList[0]);
  renderPlaylistTrack(playlistForRendering.tracksList[1]);
}

function renderPlaylistHeader(header) {
  const playlistTitleElement = document.createElement('h1');
  playlistTitleElement.append(header.title);
  document.body.append(playlistTitleElement);

  const playlistCoverElement = document.createElement('img');
  playlistCoverElement.src = header.albumСover;
  document.body.append(playlistCoverElement);
}

function renderPlaylistTrack(track) {
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

