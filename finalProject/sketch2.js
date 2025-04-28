let sounds = [];
let playButton;

function preload() {
  sounds.push(loadSound('./musicSources/bass.mp3', () => console.log('bass2 loaded')));
}

function setup() {
  createCanvas(400, 400);
  
  button = createButton('Play');
  button.position(20, 20);
  button.mousePressed(() => {
    console.log('Button pressed');
    userStartAudio().then(() => {
      console.log('AudioContext started');
      sounds.play();
    });
  });
}
