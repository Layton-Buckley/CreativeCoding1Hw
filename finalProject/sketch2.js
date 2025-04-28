let sounds = [];
let playButton;

function preload() {
  sounds.push(loadSound('./musicSources/basswav.wav', 
    () => console.log('bass loaded successfully!'),
    (err) => console.error('bass failed to load!', err)
  ));
  sounds.push(loadSound('./musicSources/drumswav.wav', 
    () => console.log('drums loaded successfully!'),
    (err) => console.error('drums failed to load!', err)
  ));
  sounds.push(loadSound('./musicSources/guitarLeftwav.wav', 
    () => console.log('left loaded successfully!'),
    (err) => console.error('left failed to load!', err)
  ));
  sounds.push(loadSound('./musicSources/guitarRightwav.wav', 
    () => console.log('right loaded successfully!'),
    (err) => console.error('right failed to load!', err)
  ));
  sounds.push(loadSound('./musicSources/vocalswav.wav', 
    () => console.log('vocals loaded successfully!'),
    (err) => console.error('vocals failed to load!', err)
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

