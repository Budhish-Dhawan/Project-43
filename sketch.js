var hr;
var mn;
var sc;
var hrangle;
var mnangle;
var scangle;



function setup() {
  createCanvas(800,400);
  //to use the angle in degrees
 angleMode(DEGREES);


}

function draw() {
  background(0, 0, 0);  
  translate(200, 200);
  rotate(-90);
  //to calculate the time in predefined functions
  hr = hour();
  mn = minute();
  sc = second();
//Compute the angle for the seconds, minutes and hour hand
  scangle = map(sc, 0, 60, 0, 360);
  mnangle = map(mn, 0, 60, 0, 360);
  hrangle = map(hr%12, 0, 12, 0, 360);
  //drawing the seconds hand
push();
rotate(scangle);
stroke(255, 0, 0);
strokeWeight(7);
line(0, 0, 120, 0);
pop();

noFill();
stroke(255, 0, 0);
strokeWeight(7);
let end3 = map(sc, 0, 60, -90, 360);
arc(0, 0, 270, 270, 0, end3);

push();
rotate(mnangle);
stroke(0, 255, 0);
strokeWeight(7);
line(0, 0, 100, 0);
pop();

noFill();
stroke(0, 255, 0);
strokeWeight(7);
let end2 = map(mn, 0, 60, 0, 360);
arc(0, 0, 295, 295, 0, end2);

push();
rotate(hrangle);
stroke(0, 0, 255);
strokeWeight(7);
line(0, 0, 60, 0);
pop();

noFill();
stroke(0, 0, 255);
strokeWeight(7);
let end1 = map(hr%12, 0, 12, 0, 360);
arc(0, 0, 320, 320, 0, end1);


  drawSprites();
}