const playlist = {
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

const playlistTitleElement = document.createElement('h1');
playlistTitleElement.append(playlist.cover.title);
document.body.append(playlistTitleElement);

const playlistCoverElement = document.createElement('img');
playlistCoverElement.src = playlist.cover.albumСover;
document.body.append(playlistCoverElement);


const tracksElement = document.createElement('ul');

const trackElement = document.createElement('li');

const trackCoverElement = document.createElement('img');
trackCoverElement.src = playlist.tracksList[0].trackCover;
trackCoverElement.style.width = '50px';
trackCoverElement.style.height = '50px';
trackElement.append(trackCoverElement);


const trackTitleElement = document.createElement("h4");
trackTitleElement.append(playlist.tracksList[0].title);
trackElement.append(trackTitleElement);

const trackAudioElement = document.createElement("audio");
trackAudioElement.controls = true;
trackAudioElement.src = playlist.tracksList[0].audio;
trackElement.append(trackAudioElement);

const trackElement1 = document.createElement('li');

const trackCoverElement1 = document.createElement('img');
trackCoverElement1.src = playlist.tracksList[1].trackCover;
trackCoverElement1.style.width = '50px';
trackCoverElement1.style.height = '50px';
trackElement1.append(trackCoverElement1);


const trackTitleElement1 = document.createElement("h4");
trackTitleElement1.append(playlist.tracksList[1].title);
trackElement1.append(trackTitleElement1);

const trackAudioElement1 = document.createElement("audio");
trackAudioElement1.controls = true;
trackAudioElement1.src = playlist.tracksList[1].audio;
trackElement1.append(trackAudioElement1);

tracksElement.append(trackElement);
tracksElement.append(trackElement1);
document.body.append(tracksElement);


