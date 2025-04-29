function setup() {
    createCanvas(windowWidth, windowHeight);
    background(211, 211, 211);
    angleMode(DEGREES);

    
    drawGuitarLeft();
    drawGuitarRight();
    drawBass();
    drawDrumSet();
    drawMicrophone();
  }
  
  function drawGuitarLeft() {
    
    translate(130, 180);
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
    translate(600, 2);
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
    
    translate(-600, 550);
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
        translate(170, -240);
        fill(255, 0, 0); 
        ellipse(250, 350, 200, 120); 
        noFill();
        stroke(0);
        strokeWeight(8);
        ellipse(250, 350, 200, 120);
        
        // Snare Drum
        fill(0, 0, 255); 
        ellipse(500, 300, 120, 70); 
        noFill();
        stroke(0);
        strokeWeight(6);
        ellipse(500, 300, 120, 70); 
        
        // Tom 1 
        fill(0, 255, 0); 
        ellipse(350, 180, 100, 60); 
        noFill();
        stroke(0);
        strokeWeight(5);
        ellipse(350, 180, 100, 60); 
        
        // Tom 2 
        fill(255, 255, 0); 
        ellipse(150, 180, 100, 60); 
        noFill();
        stroke(0);
        strokeWeight(5);
        ellipse(150, 180, 100, 60); 
        
        // Cymbals (Crash)
        fill(255, 215, 0); 
        ellipse(200, 120, 150, 20); 
        
        // Cymbals (Ride)
        ellipse(550, 120, 150, 20); 
        
        // Drum Stands
      
        // Bass Drum Stand
        stroke(0);
        strokeWeight(4);
        line(250, 400, 250, 450); 
        line(250, 450, 200, 470); 
        line(250, 450, 300, 470); 
        
        // Snare Drum Stand
        line(500, 330, 500, 380); 
        line(500, 380, 460, 400); 
        line(500, 380, 540, 400); 
        
        // Tom 1 Stand
        line(350, 210, 350, 250); 
        line(350, 250, 330, 270); 
        line(350, 250, 370, 270); 
        
        // Tom 2 Stand
        line(150, 210, 150, 250); 
        line(150, 250, 130, 270); 
        line(150, 250, 170, 270); 
        
        // Cymbal Stands
        line(200, 120, 200, 170); 
        line(550, 120, 550, 170); 
        
        
        fill(0);
        rect(230, 440, 40, 10); 
        line(250, 450, 250, 470); 
      }
      function drawMicrophone() {
        push();
      
        translate(150, -80); // Position the microphone somewhere visible
      
        // Microphone head
        fill(100); // Gray color
        stroke(50);
        strokeWeight(2);
        ellipse(0, -60, 50, 50); // Head of the mic
        
        // Mic grill lines
        stroke(200);
        strokeWeight(1);
        for (let i = -15; i <= 15; i += 5) {
          line(-25, -60 + i, 25, -60 + i); // horizontal grill lines
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