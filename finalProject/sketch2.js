
let sounds = [];
let playButton;

function preload() {
  sounds.push(loadSound('./musicSources/bass2.mp3', () => console.log('bass2 loaded')));
}

function setup() {
  createCanvas(400, 200);

  // Create a play button
  playButton = createButton('Play');
  playButton.position(20, 20);
  
  playButton.mousePressed(() => {
    userStartAudio(); // FIRST, resume audio context
    playAllSounds();  // THEN play
  });
}

function playAllSounds() {
  for (let s of sounds) {
    if (s.isLoaded()) {
      s.play();
    }
  }
}