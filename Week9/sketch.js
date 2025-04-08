//eyes//
var x1Eyes=180
var y1Eyes=200
var eyesDiameter= 80
var x2Eyes=384
var y2Eyes=230

//body//
var x1Rect=130
var y1Rect=350
var wRect=300
var hRect=100

//head//
var x1Head=280
var y1Head=250
var w1Head=250
var h1Head=300

//mouth//
var x1Line=215
var y1Line=350
var x2Line=345
var y2Line=350

//pupils//
var x1Pupil=384
var y1Pupil=230
var x2Pupil=180
var y2Pupil=200

//Hat//
var x1hat=160
var y1hat=150
var x2hat=380
var y2hat=20
var x3hat=460
var y3hat=190

//movent speed//
var movement1;
var movement2;
var movement3;
var movement4;
var movement5;

//text size//
var tS= 15;

function setup(){
    createCanvas(600,600);
 movement1 = random(1,15)
 movement2 = random(1,15)
 movement3 = random(1,15)
 movement4 = random(1,15)
 movement5 = random(1,15)
 
}
function draw(){
    background(220);
    rect(x1Rect, y1Rect, wRect, hRect)
    ellipse(x1Head, y1Head, w1Head, h1Head);
    line(x1Line, y1Line, x2Line, y2Line);
    circle(x1Eyes, y1Eyes, eyesDiameter);
    circle(x2Eyes, y2Eyes, eyesDiameter);
    point(x1Pupil, y1Pupil,);
    point(x2Pupil,y2Pupil,);
    triangle(x1hat, y1hat, x2hat, y2hat, x3hat, y3hat);
    text('-Layton', 450, 500,);
    textSize(tS);
    if( x1Eyes >= 600 || x1Eyes <= 0)
        {
            movement1 *= -1;
        }
        x1Eyes += movement1;
    
        if( x2Eyes >= 600 || x2Eyes <= 0)
            {
                movement1 *= -1;
            }
            x2Eyes += movement1;
            if( x1Pupil >= 600 || x1Pupil <= 0)
                {
                    movement2 *= -1;
                }
                x1Pupil += movement2;
                if( x2Pupil >= 600 || x2Pupil <= 0)
                    {
                        movement2 *= -1;
                    }
                    x2Pupil += movement2;
                    if( y1Line >= 500 || y1Line <= 0)
                        {
                            movement3 *= -1;
                        }
                        y1Line += movement3;
                        if( y2Line >= 600 || y2Line <= -1)
                            {
                                movement3 *= -1;
                            }
                            y2Line += movement3;
                            if( y1hat >= 600 || y1hat <= -1)
                                {
                                    movement4 *= -1;
                                }
                                y1hat += movement4;
                                if( y2hat >= 600 || y2hat <= -1)
                                    {
                                        movement4 *= -1;
                                    }
                                    y2hat += movement4;
                                    if( y3hat >= 600 || y3hat <= -1)
                                        {
                                            movement4 *= -1;
                                        }
                                        y3hat += movement4;
                                        if( x1Head >= 600 || x1Head <= -1)
                                            {
                                                movement5 *= -1;
                                            }
                                            x1Head += movement5;
                                            if( y1Head >= 600 || y1Head <= -1)
                                                {
                                                    movement5 *= -1;
                                                }
                                                y1Head += movement5;
                                                if( x1Rect >= 600 || x1Rect <= -1)
                                                    {
                                                        movement5 *= -1;
                                                    }
                                                    x1Rect += movement5;
                                                    if( y1Rect >= 600 || y1Rect <= -1)
                                                        {
                                                            movement5 *= -1;
                                                        }
                                                        y1Rect += movement5;
                                                        if(tS <= 15){
                                                            grow = true
                                                        }
                                                        if(tS >= 35){
                                                            grow = false
                                                        }
                                                        if(grow == true){
                                                            tS += 1
                                                        } else {
                                                            tS -= 1
                                                        }
}
