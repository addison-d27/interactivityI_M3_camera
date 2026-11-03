let x = 0;

//array for the rain's x and y
let rainX = [];
let rainY = [];

let rainOrNot = true;

//declare colorful rain
let rainColor = [];
let rainNum = 50;

//variable for rain
let lineXone = 0;
let lineYone = 0;

//variable for flowers
let flowerPosition = [];
let flowerNum = 10;

function setup() {
  createCanvas(500, 400);

  //colorful rain array
  for (i = 0; i < rainNum; i++) {
    rainColor[i] = [random(150, 255), random(150, 255), random(150, 255)];
  }

  //create random position
  for (i = 0; i < flowerNum; i++) {
    flowerPosition[i] = [random(width), random(height - 40, height)];
  }
}

function draw() {
  background(0, 200, 200); //red, green, blue
  
  // places the x and y position of the mouse on the canvas
  fill(0);
  stroke(255);
  strokeWeight(3);
  textSize(14);
  text(`x: ${mouseX}, y: ${mouseY}`, 20, 20);

  //-----ground
  fill("#dbc27b");
  stroke("#8c7022");
  rect(0, 300, width, 100); //x, y, w, h

  //-------mountain
  triangle(50, 300, 199, 177, 400, 300);
  triangle(150, 333, 390, 187, 500, 333);

  //-----object
  push();
  stroke("#d4c396");
  fill(255);
  circle(129, 173, 150);
  pop();

  //-----ladder
  strokeWeight(10);
  line(244, 355, 244 + 100, 355 - 250);
  line(244 + 60, 355, 244 + 60 + 100, 355 - 250);
  line(263, 302, 327, 301);
  line(285, 253, 346, 253);
  line(304, 207, 363, 207);
  line(322, 163, 382, 165);

  //-----human
  textSize(50);
  text("🚶", 200, 306);
  x = x + 5;

  //-----horse
  textSize(120);
  text("🐎", 340, 384);

  //ladder horizontal
  for (i = 0; i < 4; i++) {
    line(30, 200 + i * 30, 70, 200 + i * 30);
  }

  //ladder vertical
  for (i = 0; i < 2; i++) {
    line(30 + i * 40, 180, 30 + i * 40, 350);
  }

  //random rain color
  for (i = 0; i < rainNum; i++) {
    rainX[i] = random(width);
    rainY[i] = random(height);
  }

  //--------rain
  stroke("white");
  strokeWeight(2);
  if (rainOrNot === true) {
    for (i = 0; i < rainNum; i++) {
      stroke("white");
      strokeWeight(3);
      line(rainX[i], rainY[i], rainX[i] + 30, rainY[i] - 30);
    }
  }

  //draw multiple flowers
  push();
  for (a = 0; a < 5; a++) {
    flower2(flowerPosition[a][0]-sin(frameCount/100+a*60)*30, flowerPosition[a][1]-sin(frameCount/100+a*500)*30,sin(frameCount /100+a*50)*50,15);
  }
  pop();
}

function flower2(
  x,
  y,
  w = 60,
  h = 20,
  centerD = 30,
  pedalColor = "pink",
  pedalNum = 10
) {
  //by default, the center's diameter will be 60 because we set so, so is the pedalColor be pink
  for (i = 0; i < pedalNum; i++) {
    push();
    translate(x, y);
    stroke('brown');
    strokeWeight(1);
    rotate((TWO_PI / pedalNum) * i);
    fill("pink");
    ellipse(w/2, 0, w, h);
    fill("white");
    circle(0, 0, centerD);
    pop();
  }
}
