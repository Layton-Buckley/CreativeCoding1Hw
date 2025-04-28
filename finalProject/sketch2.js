let sounds = [];
let playButton;

function preload() {
  sounds.push(loadSound('./musicSources/bass.mp3', 
    () => console.log('Sound loaded successfully!'),
    (err) => console.error('Sound failed to load!', err)
  ));
}

function setup() {
  createCanvas(400, 200);

  playButton = createButton('Play');
  playButton.position(20, 20);

  playButton.mousePressed(() => {
    console.log('Play button clicked');
    userStartAudio().then(() => {
      console.log('AudioContext started');
      playAllSounds();
    });
  });
}

function playAllSounds() {
  for (let s of sounds) {
    if (s.isLoaded()) {
      s.play();
      console.log('Sound is playing');
    } else {
      console.log('Sound not loaded yet');
    }
  }
}

