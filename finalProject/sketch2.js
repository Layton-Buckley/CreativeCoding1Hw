let sound;
let playButton;

function preload() {
  sound = loadSound('./musicSources/bass2.mp3');
}

function setup() {
  createCanvas(400, 400);
  
  playButton = createButton('Play Sound');
  playButton.position(20, 20);
  playButton.mousePressed(startSound);
}

function startSound() {
  console.log('Button pressed!');
  userStartAudio().then(() => {
    console.log('AudioContext started!');
    if (sound.isLoaded()) {
      sound.play();
    } else {
      console.log('Sound not loaded yet.');
    }
  });
}