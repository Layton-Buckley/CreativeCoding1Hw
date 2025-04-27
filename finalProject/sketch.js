var leftGuitar;
var rightGuitar;
var bassGuitar;
var drums;
var vocals;
var background;
var fft;
var particles;

function preload(){

    leftGuitar = loadSound('./musicSources/guitarLeft.wav');


}

function setup(){
    createCanvas(200,200);
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