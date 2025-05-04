let sounds = [];
let playButton;
let scaleFactor;
let bass = './musicSources/basswav.wav';
let bassFFT;
let kick = './musicSources/kickwav.wav';
let kickFFT;
let HH = './musicSources/HHwav.wav';
let hhFFT;
let OH = './musicSources/overheadwav.wav';
let ohFFT;
let snare = './musicSources/snarewav.wav';
let snareFFT;
let guitarLeft = './musicSources/guitarLeftwav.wav';
let guitarLeftFFT;
let guitarRight = './musicSources/guitarRightwav.wav';
let guitarRightFFT;
let vocals = './musicSources/vocalswav.wav'
let vocalsFFT;

function preload() {
  bassSound = loadSound(bass, 
    () => console.log('bass loaded successfully!'),
    (err) => console.error('bass failed to load!', err)
  );
  sounds.push(bassSound);

  kickSound = loadSound(kick, 
    () => console.log('kick loaded successfully!'),
    (err) => console.error('kick failed to load!', err)
  );
  sounds.push(kickSound);

  HHSound = loadSound(HH, 
    () => console.log('HH loaded successfully!'),
    (err) => console.error('HH failed to load!', err)
  );
  sounds.push(HHSound);

  OHSound = loadSound(OH, 
    () => console.log('OH loaded successfully!'),
    (err) => console.error('OH failed to load!', err)
  );
  sounds.push(OHSound);

  snareSound = loadSound(snare, 
    () => console.log('snare loaded successfully!'),
    (err) => console.error('snare failed to load!', err)
  );
  sounds.push(snareSound);

  guitarLeftSound = loadSound(guitarLeft, 
    () => console.log('left loaded successfully!'),
    (err) => console.error('left failed to load!', err)
  );
  sounds.push(guitarLeftSound);

  guitarRightSound = loadSound(guitarRight, 
    () => console.log('right loaded successfully!'),
    (err) => console.error('right failed to load!', err)
  );
  sounds.push(guitarRightSound);

  vocalsSound = loadSound(vocals, 
    () => console.log('vocals loaded successfully!'),
    (err) => console.error('vocals failed to load!', err)
  );
  sounds.push(vocalsSound);
}

function setup() {
  createCanvas(windowWidth, windowHeight);


  scaleFactor = min(width / 1920, height / 1080);

  playButton = createButton('Play');
  playButton.position(width / 2 -30, 20);

  playButton.mousePressed(() => {
    console.log('Play button clicked');
    userStartAudio().then(() => {
      console.log('AudioContext started');
      playAllSounds();
      loop();
    });
  });

  audioFFTs();

}

function audioFFTs(){
  guitarLeftFFT = new p5.FFT();
  guitarLeftFFT.setInput(guitarLeftSound);

  guitarRightFFT = new p5.FFT();
  guitarRightFFT.setInput(guitarRightSound);

  bassFFT = new p5.FFT();
  bassFFT.setInput(bassSound);

  vocalsFFT = new p5.FFT();
  vocalsFFT.setInput(vocalsSound);

  kickFFT= new p5.FFT();
  kickFFT.setInput(kickSound)

}

function draw(){
  background(172, 120, 186);
  drawAllInstruments();
  lefGuitarStrings();
  rightGuitarStrings();
  bassStrings();
  translate(width / 2, height / 2);
  vocalHead();
}

function drawAllInstruments(){
  push();
  translate(width / 2, height / 2);
  scale(scaleFactor);
  drawGuitarLeft();
  drawGuitarRight();
  drawBass();
  drawDrumSet();
  drawMicrophone();
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  scaleFactor = min(width / 1920, height / 1080);
  redraw();
}

function playAllSounds() {
  for (let s of sounds) {
    if (s.isLoaded()) {
      s.play();
      console.log('Sound is playing');
    } else {
      console.log('Sound not loaded yet');
    }
  }
}


function drawGuitarLeft() {
    
    translate(-605, -280);
    scale(1.3);
    stroke(0);
    fill(10, 52, 99); 
    beginShape();
    vertex(-15, 30); 
    vertex(-100, 220); 
    vertex(13, 150); 
    vertex(120, 150); 
    vertex(20, 28); 
    endShape(CLOSE);

    // Neck
    fill(139, 69, 19); 
    rect(-10, -150, 20, 180);
  
    // Frets
    stroke(255);
    strokeWeight(2);
    for (let i = -130; i < 20; i += 20) {
      line(-10, i, 10, i);
    }
  
    // Headstock
    fill(50);
    stroke(0);
    beginShape();
    vertex(-10, -150);
    vertex(-20, -180);
    vertex(20, -180);
    vertex(10, -150);
    endShape(CLOSE);

     //Bridge
    stroke(128, 128, 128)
    line(-15, 120, 20, 120);
  }

  function drawGuitarRight() {
    
    translate(900, 0);
    fill(34, 139, 34); 
    stroke(0);
    beginShape();
    vertex(-15, 30); 
    vertex(-100, 220); 
    vertex(13, 150); 
    vertex(120, 150); 
    vertex(20, 28); 
    endShape(CLOSE);
  
    // Neck
    fill(139, 69, 19); 
    rect(-10, -150, 20, 180);
  
    // Frets
    stroke(255);
    strokeWeight(2);
    for (let i = -130; i < 20; i += 20) {
      line(-10, i, 10, i);
    }
  
    // Headstock
    fill(50);
    stroke(0);
    beginShape();
    vertex(-10, -150);
    vertex(-20, -180);
    vertex(20, -180);
    vertex(10, -150);
    endShape(CLOSE);

    //Bridge
    stroke(255, 255, 255)
    line(-15, 120, 20, 120);
    }

  function drawBass() {
    
    translate(-900, 370);
    scale(1);
    fill(0, 0, 0); 
    stroke(0)
    beginShape();
    vertex(-15, 30); 
    vertex(-100, 220); 
    vertex(13, 150); 
    vertex(120, 150); 
    vertex(20, 28); 
    endShape(CLOSE);
  
    // Neck
    fill(139, 69, 19); 
    rect(-10, -150, 20, 180);
  
    // Frets
    stroke(255);
    strokeWeight(2);
    for (let i = -130; i < 20; i += 20) {
      line(-10, i, 10, i);
    }
  
    // Headstock
    fill(50);
    stroke(0);
    beginShape();
    vertex(-10, -150);
    vertex(-20, -180);
    vertex(20, -180);
    vertex(10, -150);
    endShape(CLOSE);

    //Bridge
    stroke(128, 128, 128)
    line(-15, 120, 20, 120);
  }

  function drawDrumSet() {
        
    translate(30, -670);
    scale(1.5);
      fill(255, 0, 0); 
      ellipse(250, 350, 200, 120); 
      noFill();
      stroke(0);
      strokeWeight(8);
      ellipse(250, 350, 200, 120);
      
      // Snare Drum
      translate(-95, 20)
      fill(0, 0, 255); 
      ellipse(500, 300, 120, 70); 
      noFill();
      stroke(0);
      strokeWeight(6);
      ellipse(500, 300, 120, 70); 
      
      // Tom 1 
      translate(75, 70)
      fill(0, 255, 0); 
      ellipse(350, 180, 100, 60); 
      noFill();
      stroke(0);
      strokeWeight(5);
      ellipse(350, 180, 100, 60); 
      
      // Tom 2 
      translate(50, 0);
      fill(255, 255, 0); 
      ellipse(150, 180, 100, 60); 
      noFill();
      stroke(0);
      strokeWeight(5);
      ellipse(150, 180, 100, 60); 
      
      // Cymbals (Crash)
      translate(-80,0);
      fill(255, 215, 0); 
      ellipse(200, 120, 150, 20); 
      
      // Cymbals (Ride)
      translate(-120, 0);
      ellipse(550, 120, 150, 20); 
      
    
    
      // Bass Drum Stand
      translate(170, -80);
      stroke(0);
      strokeWeight(4);
      line(160, 370, 130, 400); 
      line(340, 370, 370, 400); 
      
      // Snare Drum Stand
      translate(-95, 20);
      line(500, 330, 500, 380); 
      line(500, 380, 460, 400); 
      line(500, 380, 540, 400); 
      
      
      // Cymbal Stands
      translate(45, 90);
      line(200, 120, 200, 90);
      translate(-120, -30); 
      line(550, 120, 550, 190); 
      
      translate(170, -130);
      fill(255, 255, 255);
      rect(230, 440, 40, 10); 
      line(250, 450, 250, 470); 
    }
    function drawMicrophone() {
      push();
    
    translate(580, 450);
    scale(0.9);
      // Microphone head
      fill(100);
      stroke(0);
      strokeWeight(0);
      ellipse(0, -60, 50, 50);
      
      // Mic grill lines
      stroke(200);
      strokeWeight(1);
      for (let i = -15; i <= 15; i += 5) {
        line(-25, -60 + i, 25, -60 + i); 
      }
    
      // Microphone body
      stroke(0);
      fill(50);
      rect(-10, -35, 20, 70, 5); 
      fill(30);
      rect(-15, 35, 30, 10); 
    
      // Stand
      stroke(0);
      strokeWeight(4);
      line(0, 45, 0, 150); 
    
      // Stand base
      strokeWeight(6);
      line(-30, 150, 30, 150); 
    
      pop();
    }

    function lefGuitarStrings() {
      push();
      let wave = guitarLeftFFT.waveform();
      stroke(255);
      noFill();
      
      translate(-467.5 * scaleFactor, -303 * scaleFactor);
      let lineHeight = 360 * scaleFactor;
      let startX = width / 2 - 150 * scaleFactor;
      let spacing = 5 * scaleFactor;
    
      for (let s = 0; s < 6; s++) {
        let xPos = startX + s * spacing;
        beginShape(POINTS);
        for (let i = 0; i < lineHeight; i++) {
          let index = floor(map(i, 0, lineHeight, 0, wave.length));
          let y = i + height / 2 - lineHeight / 2;
          let xOffset = wave[index] * 30 * scaleFactor;
          vertex(xPos + xOffset, y);
        }
        endShape();
      }
      pop();
    }
    
    function rightGuitarStrings() {
      push();
      let wave = guitarRightFFT.waveform();
      stroke(255);
      noFill();
      translate(702.5 * scaleFactor, -300 * scaleFactor);
      let lineHeight = 360 * scaleFactor;
      let startX = width / 2 - 150 * scaleFactor;
      let spacing = 5 * scaleFactor;
    
      for (let s = 0; s < 6; s++) {
        let xPos = startX + s * spacing;
        beginShape(POINTS);
        for (let i = 0; i < lineHeight; i++) {
          let index = floor(map(i, 0, lineHeight, 0, wave.length));
          let y = i + height / 2 - lineHeight / 2;
          let xOffset = wave[index] * 30 * scaleFactor;
          vertex(xPos + xOffset, y);
        }
        endShape();
      }
      pop();
    }
    
    function bassStrings() {
      push();
      let wave = bassFFT.waveform();
      stroke(255);
      noFill();
      translate(-467.4 * scaleFactor, 173 * scaleFactor);
      let lineHeight = 370 * scaleFactor;
      let startX = width / 2 - 150 * scaleFactor;
      let spacing = 8 * scaleFactor;
    
      for (let s = 0; s < 4; s++) {
        let xPos = startX + s * spacing;
        beginShape(POINTS);
        for (let i = 0; i < lineHeight; i++) {
          let index = floor(map(i, 0, lineHeight, 0, wave.length));
          let y = i + height / 2 - lineHeight / 2;
          let xOffset = wave[index] * 50 * scaleFactor;
          vertex(xPos + xOffset, y);
        }
        endShape();
      }
      pop();
    }
    
    function vocalHead() {
      push();
      let wave = vocalsFFT.waveform();
      stroke(0);
      noFill();
      translate(565 * scaleFactor, 25 * scaleFactor);
      let baseRadius = 43.5 * scaleFactor;
      let offsetAmount = 40 * scaleFactor;
    
      beginShape();
      for (let i = 0; i < wave.length; i++) {
        let angle = map(i, 0, wave.length, 0, TWO_PI);
        let radius = baseRadius + wave[i] * offsetAmount;
        let x = radius * cos(angle);
        let y = radius * sin(angle);
        vertex(x, y);
      }
      endShape(CLOSE);
      pop();
    }