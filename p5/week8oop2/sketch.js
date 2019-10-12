var cars = [];
var frogPos;


function setup() {
  createCanvas(800, 800);
  for (var i = 0; i < 40; i++) {
    cars.push(new Car()); //makes 1 new car
  }
  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  background(100);
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if(cars[i].pos.dist(frogPos) < 30) {
    cars.splice(i, 1);  //kill car (thing to take out, how many to take out)
    }
  }
  //draw frog
  fill('#00d93a');
  rect(frogPos.x, frogPos.y, 60, 60);
  CheckForKeys();
}

//car class (can also write class instead of function)
function Car() {
  //attributes
  this.pos = createVector(100, 100); // vector = self contained x and y component
  this.vel = createVector(random(-5, 5), random(-5, 5)); //vector for velocity-5 foward and backwards
  this.r = random(255); //red attribute
  this.g = random(255); //green
  this.b = random(255); //blue
  this.size = random(20,70); //random size

  //methods
  this.display = function() {
    noStroke();
    fill(this.r, this.g, this.b);
    ellipse(this.pos.x, this.pos.y, this.size, this.size); //used random size in x and y coordinates of circle
  }
  this.drive = function() {
    this.pos.add(this.vel); //5 is velocity
    if (this.pos.x > width) this.pos.x = 0; //if x is greater than width; x = 0
    if (this.pos.x < 0) this.pos.x = width; //if x is less than 0; x = width of canvas
    if (this.pos.y > height) this.pos.y = 0; //if y is greater than height; y = 0
    if (this.pos.y < 0) this.pos.y = height; //if y is less than 0; y = height of canvas
  }
}

//uses keys to move frog
function CheckForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;
}
