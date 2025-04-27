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
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}