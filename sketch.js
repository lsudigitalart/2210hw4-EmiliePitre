// Emilie Pitre ©2016 hw3

//Event Horizon
//Inspired by fl0w's gradual-consumption-based gameplay.
//The player is a black hole draining energy from passing stars.
//The black hole gains mass until it is strong enough and large enough to fully engulf the star.

var px = 0;
var py = 0;
var psize = 15;
var easing = 0.01;
var score = 0;
var radius = 20;
var ex = -radius - 150
var ey = 0;
var speed = 2;

function setup() {
  createCanvas(900, 600);
  textFont("Century Gothic");
  ellipseMode(RADIUS);
}

function draw() {
  background(50, 50, 100);

  ex += speed; //enemy
    if (ex > width+radius) {
      ex = -radius;
    }
  ey += speed/2;
    if (ey > height+radius) {
      ey = -radius;
    }
    fill(100, 255, 100, 50);
    ellipse(ex, ey, radius, radius);
    fill(255, 255, 100);
    ellipse(ex, ey, 2, radius);
    ellipse(ex, ey, radius, 2);

  var d = dist(px, py, ex, ey); //collision
  if (d < radius) {
    fill(30, 30, 0, 100);
    score = score + 1;
    psize = psize + 1/10;
  } else {
    fill(0, 100);
  }

  var targetX = mouseX; //star/character/cursor
  px += (targetX - px) * easing;
  var targetY = mouseY;
  py += (targetY - py) * easing;
  noStroke();
  ellipse(px, py, psize, psize/2);
  fill(0)
  ellipse(px, py, psize/2, psize/4);


  println(targetX + " : " + px);
  println(targetY + " : " + py);


  fill(0, 255, 255, 50);
  textSize(20);
  text("EVENT HORIZON", width - 170, 30);

  if (score >= 500){
    textAlign(CENTER);
    fill(50, 50, 100);
    rect(0, 0, width, height);
    textSize(30);
    fill(255, 255, 255);
    text("STAR EATEN!", width/2, height/2);
  } else {
    textAlign(LEFT);
    textSize(14);
    fill(0, 255, 255);
    text("STARLIGHT ABSORBED", 20, 30);
    text(score, 20, 50);
  }
}
