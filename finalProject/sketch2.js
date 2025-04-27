var bass;
var drums;
function preload() {
    bass = loadSound('./musicSources/guitarLeft.mp3');
    drums = loadSound('./musicSources/drums.mp3');
}
function setup() {

  createCanvas(720, 200);
  background(255, 0, 0);
}

function mousePressed() {
  if (bass.isPlaying()) {
    // .isPlaying() returns a boolean
    bass.stop();
    background(255, 0, 0);
  } else {
    bass.play();
    background(0, 255, 0);
  }
}