var guitarLeft;
var drums;
function preload() {
    guitarLeft = loadSound('./musicSources/guitarLeft.mp3');
    guitarRight = loadSound('./musicSources/guitarRight.mp3');
}
function setup() {

  createCanvas(720, 200);
  background(255, 0, 0);
}



function playMusic() {
const audio1 = new Audio("./musicSources/guitarLeft.mp3");
const audio2 = new Audio("./musicSources/guitarRight.mp3");

audio1.addEventListener("play", function(){
  audio2.play();
});
}

