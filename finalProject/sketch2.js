var guitarLeft;
var drums;
function preload() {

    drums = loadSound('./musicSources/drums.mp3');
}
function setup() {

  createCanvas(720, 200);
  background(255, 0, 0);
}

function mousePressed() {

  if (drums.isPlaying()) {
    // .isPlaying() returns a boolean
    drums.stop();
    background(255, 0, 0);
  } else {
    drums.play();
    background(0, 255, 0);
  }
}