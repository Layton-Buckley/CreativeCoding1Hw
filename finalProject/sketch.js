var leftGuitar;
var rightGuitar;
var bassGuitar;
var drums;
var vocals;
var background;
var fft;
var particles;

function preload(){
    soundFormats('wav')
    leftGuitar = loadSound("music sources/guitarLeft.wav");


}

function setup(){
    createCanvas(200,200)
    leftGuitar.play();
    rightGuitar.play();
    bassGuitar.play();
    drums.play();
    vocals.play();
}