
let sounds = [];
let playButton;

function preload() {
  sounds.push(loadSound('./musicSources/bass2.mp3', () => console.log('bass2 loaded')));
  sounds.push(loadSound('./musicSources/drums2.mp3', () => console.log('drums2 loaded')));
  sounds.push(loadSound('./musicSources/guitarLeft2.mp3', () => console.log('guitarLeft2 loaded')));
  sounds.push(loadSound('./musicSources/guitarRight2.mp3', () => console.log('guitarRight2 loaded')));
  sounds.push(loadSound('./musicSources/vocals2.mp3', () => console.log('vocals2 loaded')));
}

function setup() {
  createCanvas(400, 200);

  // Create a play button
  playButton = createButton('Play');
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