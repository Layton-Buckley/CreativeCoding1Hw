//x and y player
var playerX = 100;
var playerY = 100;

//keycodes
var w = 87;
var s = 83;
var a = 65;
var d = 68;

//shape
var squareX = 30;
var squareY = 50;
var squareXspeed;
var squareYspeed;

var circleX = 130;
var circleY = 150;
var circleXspeed;
var circleYspeed;

// mouse shape
var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(700, 600);
    
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createCharacter(200,350);
  
}

function draw()
{
    background(220,208,255);
    stroke(0);
    fill(0);
    createBorders(3);

    // exit
    textSize(16);
    text("EXIT", width-50,height-50)
    drawCharacter();
    characterMovement();


    //enemy
    fill(255,0,0);
    square(squareX, squareY, 50);
  
    fill(0,0,255);
    circle(circleX, circleY, 100);

     //speed
     squareXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) - 5);
     squareYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 5);

    circleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 3);
    circleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 3);
  
  
    // movement
    squareX += squareXSpeed;
    squareY += squareYSpeed;
    if(squareX > width)
    {
        squareX = 0;
    }
    else if(squareX < 0)
    {
        squareX = width;
    }
    else if(squareY > height)
    {
        squareY = 0;
    }
    else if(squareY < 0)
    {
        squareY = height;
    }

    circleX -= squareXSpeed;
    circleY -= squareYSpeed;
    if(circleX > width)
    {
        circleX = 0;
    }
    else if(circleX < 0)
    {
        circleX = width;
    }
    else if(circleY > height)
    {
        circleY = 0;
    }
    else if(circleY < 0)
    {
        circleY = height;
    }
  
    // You Win!
    if(characterX > width && characterY > width -155 )
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }

    // mouse click
    fill(0,255,0);
    circle(mouseShapeX, mouseShapeY, 60);
}

function characterMovement()
{
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    else if(keyIsDown(s))
    {
        characterY += 10;   
    }
    else if(keyIsDown(a))
    {
        characterX -= 10;   
        console.log("movement: " + characterX);
    }
    else if(keyIsDown(d))
    {
        characterX += 10;   
    }
}
function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);

}

function drawCharacter()
{
    fill(255,255,0);
    circle(characterX,characterY,25);
}
function createBorders(thickness)
{
    // top border
    rect(0,0,width,thickness);
    // left border
    rect(0,0,thickness,height);
    // bottom border
    rect(0, height-thickness,width, thickness);
    // right border
    rect(width-thickness,0,thickness,height-50);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}