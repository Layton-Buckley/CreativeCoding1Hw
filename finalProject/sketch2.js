let sounds = [];
let playButton;
let scaleFactor;
//swag
function preload() {
  sounds.push(loadSound('./musicSources/basswav.wav', 
    () => console.log('bass loaded successfully!'),
    (err) => console.error('bass failed to load!', err)
  ));
  sounds.push(loadSound('./musicSources/drumswav.wav', 
    () => console.log('drums loaded successfully!'),
    (err) => console.error('drums failed to load!', err)
  ));
  sounds.push(loadSound('./musicSources/guitarLeftwav.wav', 
    () => console.log('left loaded successfully!'),
    (err) => console.error('left failed to load!', err)
  ));
  sounds.push(loadSound('./musicSources/guitarRightwav.wav', 
    () => console.log('right loaded successfully!'),
    (err) => console.error('right failed to load!', err)
  ));
  sounds.push(loadSound('./musicSources/vocalswav.wav', 
    () => console.log('vocals loaded successfully!'),
    (err) => console.error('vocals failed to load!', err)
  ));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background (211)

  scaleFactor = min(width / 1920, height / 1080);

  playButton = createButton('Play');
  playButton.position(width / 2 -30, 20);

  playButton.mousePressed(() => {
    console.log('Play button clicked');
    userStartAudio().then(() => {
      console.log('AudioContext started');
      playAllSounds();
    });
  });

  noLoop();
  drawAllInstruments();

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
    fill(255, 0, 0); 
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
  }

  function drawGuitarRight() {
    
    translate(900, 0);
    fill(0, 0, 255); 
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
  }

  function drawBass() {
    
    translate(-900, 370);
    scale(1);
    fill(255, 255, 0); 
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
        line(250, 400, 250, 450); 
        line(250, 450, 200, 470); 
        line(250, 450, 300, 470); 
        
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
        
        translate(170, -100);
        fill(0);
        rect(230, 440, 40, 10); 
        line(250, 450, 250, 470); 
      }
      function drawMicrophone() {
        push();
      
      translate(580, 420);
      scale(0.9);
        // Microphone head
        fill(100);
        stroke(50);
        strokeWeight(2);
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