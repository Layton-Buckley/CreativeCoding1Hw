
let sounds = [];
let playButton;

function preload() {
  sounds.push(loadSound('musicSources/bass.mp3'));
  sounds.push(loadSound('musicSources/drums.mp3'));
  sounds.push(loadSound('musicSources/guitarLeft.mp3'));
  sounds.push(loadSound('musicSources/guitarRight.mp3'));
  sounds.push(loadSound('musicSources/vocals.mp3'));
}

function setup() {
  createCanvas(400, 200);

  // Create a play button
  playButton = createButton('Play All Sounds');
  playButton.position(20, 20);
  playButton.mousePressed(playAllSounds);
}

function playAllSounds() {
  // Play all sounds if they are loaded
  for (let s of sounds) {
    if (s.isLoaded()) {
      s.play();
    }
  }
}