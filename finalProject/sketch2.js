let sound;
let button;

function preload() {
  sound = loadSound('./musicSources/bass2.mp3'); // Make sure this file is in the same folder!
}

function setup() {
  createCanvas(400, 400);
  
  button = createButton('Play');
  button.position(20, 20);
  button.mousePressed(() => {
    console.log('Button pressed');
    userStartAudio().then(() => {
      console.log('AudioContext started');
      sound.play();
    });
  });
}
