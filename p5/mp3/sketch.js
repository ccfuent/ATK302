var cans = [];
var fishPos;
var myState = 0;
var timer = 0;
var splashScreen;
var winScreen;
var loseScreen;
var nunitoFont;
var gameScreen;
var fishDirection = 0.5;
var splashFish = 0;
var song1;
var y = -55;
var yy = -350;
var yyy = -350;

function preload() {
  song1 = loadSound('assets/POL-follow-me-short.wav');

}

function setup() {

  createCanvas(700, 500);
  song1.play();
  song1.loop();

  nunitoFont = loadFont("assets/Nunito-Bold.ttf");
  splashScreen = loadImage("assets/newSplashScreen-02-02.png");
  winScreen = loadImage("assets/winScreen-05.png");
  gameScreen = loadImage("assets/winScreen-05.png");
  loseScreen = loadImage("assets/loseScreen-03.png");

  //spawn cans for loop!
  for (var i = 0; i < 7; i++) {
    cans.push(new Can());
  }

  fishPos = createVector(width / 2, height - 100);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  switch (myState) {
    case 0: // splash screen
      background(255);
      image(splashScreen, 0, 0);
      fill("white");
      textFont(nunitoFont, 80);
      text('Ocean Sweep!', 80, 100);
      textSize(13);
      text('CLICK TO PLAY!', 308, 153);

      push();
      translate(140, y);
        y +=1;
        if (y > 360) {
          y = 360; }
      scale(0.75);
      makeSixPack();
      pop();

      push();
      translate(300, yy);
        yy +=0.5;
        if (yy > 100) {
          yy = 100; }
      scale(0.75);
      makeCan();
      pop();

      push();
      translate(300, yyy);
        yyy +=0.75;
        if (yyy > 130) {
          yyy = 130; }
      scale(0.75);
      makeChipBag();
      pop();

      push();
      translate(200, 200);
      scale(0.5);
      makeFish();
      pop();

      break;

    case 1: // the game state
      game();
      timer++;
      if (timer > 650) {
        myState = 3;
        timer = 0;
      }
      break;

    case 2: // the win state
      image(winScreen, 0, 0);
      fill("white");
      textSize(50);
      text('You Saved the Ocean!!', 100, 100);

      push();
      translate(150, 150);
      scale(0.75);
      makeFish();
      pop();
      break;

    case 3: // the lose state
      image(loseScreen, 0, 0);
      fill("white");
      textSize(35);
      text('Better Luck Next Time...', 167, 100);

      push();
      translate(130, 119);
      scale(0.75);
      makeFish();
      pop();

      break;
  }

}

function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2: // the win state
      resetTheGame()
      myState = 0;
      break;

    case 3: //the lose state
      resetTheGame()
      myState = 0;
      break;
  }
}


function Can() {
  //attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-3, 3), random(-3, 3));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.type = floor(random(3));

  // methods
  this.display = function() {
    // debugging dots
    // fill('yellow');
    // ellipse(this.pos.x, this.pos.y, 50, 50);
    switch (this.type) {
      case 0:
        push();
        translate(this.pos.x - 232, this.pos.y - 315)
        scale(0.75);
        makeCan();
        pop();
      break;

      case 1:
      // fill('yellow');
      // ellipse(this.pos.x, this.pos.y, 30, 30);
        push();
        translate(this.pos.x - 335, this.pos.y - 338)
        scale(0.75);
        makeChipBag();
        pop();
      break;

      case 2:
      // fill('yellow');
      // ellipse(this.pos.x, this.pos.y, 30, 30);
      push();
      translate(this.pos.x - 80, this.pos.y - 70)
      scale(0.75);
      makeSixPack();
      pop();
      break;
    }
  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }
}

function keyPressed() {
  //triple = equals exactly equal intense equal
  if (keyCode === LEFT_ARROW) fishDirection = 0.5;
  if (keyCode === RIGHT_ARROW) fishDirection = -0.5;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) fishPos.x = fishPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) fishPos.x = fishPos.x + 5;
  if (keyIsDown(UP_ARROW)) fishPos.y = fishPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) fishPos.y = fishPos.y + 5;
}

function game() {
  image(gameScreen, 0, 0);
  for (var i = 0; i < cans.length; i++) {
    cans[i].display();
    cans[i].drive();
    if (cans[i].pos.dist(fishPos) < 50) {
      cans.splice(i, 1);
    }
  }

  if (cans.length == 0) { //cars.length is the number of cars
    myState = 2;
  }

  //debugging dots
  // fill('red');
  // ellipse(fishPos.x, fishPos.y, 50, 50);

  push();
  if(fishDirection==0.5){
    translate(fishPos.x - 200, fishPos.y - 120);
  } else {
    translate(fishPos.x + 200, fishPos.y - 120);
  }

  scale(fishDirection, 0.5);
  makeFish();
  pop();

  checkForKeys();
}

function resetTheGame() {
  cans = []; //reset the cans
  //spawn cans!
  for (var i = 0; i < 8; i++) {
    cans.push(new Can());
  }
  timer = 0;
  y = -55;
  yy = -350;
  yyy = -350;
}


function makeSodaRings() {
  strokeWeight(4);
  stroke("#d9d9d9");
  fill("#3fc4d9");
  ellipse(82, 78, 20, 20); //6pack plastic 1

  strokeWeight(4);
  stroke("#d9d9d9");
  fill("#3fc4d9");
  ellipse(102, 65, 20, 20); //6pack plastic 2

  strokeWeight(4);
  stroke("#d9d9d9");
  fill("#3fc4d9");
  ellipse(94, 97, 20, 20); //6pack plastic 3

  strokeWeight(4);
  stroke("#d9d9d9");
  fill("#3fc4d9");
  ellipse(113, 85, 20, 20); //6pack plastic 4

  strokeWeight(4);
  stroke("#d9d9d9");
  fill("#3fc4d9");
  ellipse(107, 117, 20, 20); //6pack plastic 5

  strokeWeight(4);
  stroke("#d9d9d9");
  fill("#3fc4d9");
  ellipse(127, 104, 20, 20); //6pack plastic 6
}

function makeChipBag() {
  noStroke();
  fill("#2529f7");
  quad(421, 469, 435, 431, 470, 435, 457, 469); //chip bag

  fill("#f2ea00");
  ellipse(446, 450, 20, 20); //logo on chip bag
}


function makeCan() {
  noStroke();
  fill("#d60d0d");
  rect(309, 421, 25, 45); //can

  fill(255);
  rect(309, 432, 25, 15); //can label
}

function makeSixPack() {

  strokeWeight(4);
  stroke("#d9d9d9");
  noFill();
  ellipse(82, 78, 20, 20); //6pack plastic 1

  strokeWeight(4);
  stroke("#d9d9d9");
  noFill();
  ellipse(102, 65, 20, 20); //6pack plastic 2

  strokeWeight(4);
  stroke("#d9d9d9");
  noFill();
  ellipse(94, 97, 20, 20); //6pack plastic 3

  strokeWeight(4);
  stroke("#d9d9d9");
  noFill();
  ellipse(113, 85, 20, 20); //6pack plastic 4

  strokeWeight(4);
  stroke("#d9d9d9");
  noFill();
  ellipse(107, 117, 20, 20); //6pack plastic 5

  strokeWeight(4);
  stroke("#d9d9d9");
  noFill();
  ellipse(127, 104, 20, 20); //6pack plastic 6
}

function makeFish() {
  //fish
  noStroke();
  fill("#f48072");
  quad(287, 242, 369, 182, 506, 242, 369, 300); //body
  quad(506, 242, 522, 203, 563, 196, 553, 228); //backfin top
  quad(506, 242, 522, 280, 563, 290, 553, 260); //backfin bottom
  triangle(369, 182, 407, 149, 452, 165); //fin top
  triangle(369, 300, 407, 329, 452, 314); //fin bottom

  fill("#fedbc1");
  ellipse(334, 233, 20, 20); //eye
  fill("#00919e");
  ellipse(332, 233, 12, 12); //eye

  //scale set 1
  fill("#f15c47");
  arc(417, 220, 25, 25, PI + PI / 2, PI / 2, OPEN); //scale1
  fill("#00919e");
  arc(417, 242, 25, 25, PI + PI / 2, PI / 2, OPEN); //scale2
  fill("#a2d9d3");
  arc(417, 264, 25, 25, PI + PI / 2, PI / 2, OPEN); //scale3

  //scale set 2
  fill("#00919e");
  arc(430, 225, 25, 25, PI + PI / 2, PI / 2, OPEN); //scale1
  fill("#f15c47");
  arc(430, 260, 25, 25, PI + PI / 2, PI / 2, OPEN); //scale3
  fill("#a2d9d3");
  arc(430, 242, 25, 25, PI + PI / 2, PI / 2, OPEN); //scale2

  //scale set 3
  fill("#f15c47");
  arc(443, 230, 25, 25, PI + PI / 2, PI / 2, OPEN); //scale1
  fill("#00919e");
  arc(443, 254, 25, 25, PI + PI / 2, PI / 2, OPEN); //scale2

  //scale set 4
  fill("#f15c47");
  arc(456, 249, 25, 25, PI + PI / 2, PI / 2, OPEN); //scale2
  fill("#a2d9d3");
  arc(456, 235, 25, 25, PI + PI / 2, PI / 2, OPEN); //scale1

  //scale set 5
  fill("#00919e");
  arc(469, 242, 25, 25, PI + PI / 2, PI / 2, OPEN); //scale1
}

function fishColorChange() {
  noStroke();
      fill("#c9258f");
      quad(287, 242, 369, 182, 506, 242, 369, 300); //body
      quad(506, 242, 522, 203, 563, 196, 553, 228); //backfin top
      quad(506, 242, 522, 280, 563, 290, 553, 260); //backfin bottom
      triangle(369, 182, 407, 149, 452, 165); //fin top
      triangle(369, 300, 407, 329, 452, 314); //fin bottom

      fill("#9abae2");
      ellipse(334, 233, 20, 20); //eye
      fill("#5a449b");
      ellipse(332, 233, 12, 12); //eye

  //scale set 1
      fill("#6b2873");
      arc(417, 220, 25, 25, PI + PI/2, PI/2, OPEN); //scale1
      fill("#1d4489");
      arc(417, 242, 25, 25, PI + PI/2, PI/2, OPEN); //scale2
      fill("#9abae2");
      arc(417, 264, 25, 25, PI + PI/2, PI/2, OPEN); //scale3

  //scale set 2
      fill("#1d4489");
      arc(430, 225, 25, 25, PI + PI/2, PI/2, OPEN); //scale1
      fill("#6b2873");
      arc(430, 260, 25, 25, PI + PI/2, PI/2, OPEN); //scale3
      fill("#9abae2");
      arc(430, 242, 25, 25, PI + PI/2, PI/2, OPEN); //scale2

  //scale set 3
        fill("#6b2873");
        arc(443, 230, 25, 25, PI + PI/2, PI/2, OPEN); //scale1
        fill("#1d4489");
        arc(443, 254, 25, 25, PI + PI/2, PI/2, OPEN); //scale2

  //scale set 4
        fill("#6b2873");
        arc(456, 249, 25, 25, PI + PI/2, PI/2, OPEN); //scale2
        fill("#9abae2");
        arc(456, 235, 25, 25, PI + PI/2, PI/2, OPEN); //scale1

  //scale set 5
        fill("#1d4489");
        arc(469, 242, 25, 25, PI + PI/2, PI/2, OPEN); //scale1

}
