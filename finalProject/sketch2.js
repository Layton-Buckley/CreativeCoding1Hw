var guitarLeft;
var drums;
function preload() {
    guitarLeft = loadSound('./musicSources/guitarLeft.mp3');
    drums = loadSound('./musicSources/drums.mp3');
}
function setup() {

  createCanvas(720, 200);
  background(255, 0, 0);
}

function mousePressed() {
  if (guitarLeft.isPlaying()) {
    // .isPlaying() returns a boolean
    guitarLeft.stop();
    background(255, 0, 0);
  } else {
    guitarLeft.play();
    background(0, 255, 0);
  }
  if (drums.isPlaying()) {
    // .isPlaying() returns a boolean
    drums.stop();
    background(255, 0, 0);
  } else {
    drums.play();
    background(0, 255, 0);
  }
}