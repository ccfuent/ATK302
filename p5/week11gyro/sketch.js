/* For mobile phones - accesses accelerometer.
Make sure you turn on orientation lock on your iPhone or Android device. */
var cars = [];
var frogPos;
var alpha, beta, gamma; // orientation data
var bunnyImage;
var xPosition = 0;
var yPosition = 0;
var x = 0; // acceleration data
var y = 0;
var z = 0;

function setup() {

  createCanvas(windowWidth, windowHeight);

  // initialize accelerometer variables
  alpha = 0;
  beta = 0;
  gamma = 0;

  for (var i = 0; i < 40; i++) {
    cars.push(new Car()); //makes 1 new car
  }
  frogPos = createVector(width / 2, height - 80);

  bunnyImage = loadImage("assets/bunny.jpg");
  imageMode(CENTER);
  rectMode(CENTER);

}

function draw() {

  background('#c6f5ff'); // light blue

  // the map command !!!!
  // takes your variable and maps it from range 1 to range 2
  // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;
  xPosition = map(gamma, -60, 60, 0, width);
  yPosition = map(beta, -30, 30, 0, height);

  push(); // before you use translate, rotate, or scale commands, push and then pop after

  translate(xPosition, yPosition); // move everything over by x, y

  rotate(radians(alpha)); // using alpha in here so it doesn't feel bad

  image(bunnyImage, 0, 0, 500, 500);
  //  	rect(0, 0, 100, 100) ;
  pop();

  frogPos.x = xPosition;
  frogPos.y = yPosition;

  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 30) {
      cars.splice(i, 1); //kill car (thing to take out, how many to take out)
    }
  }


  // DECORATIONS
  // Just a bunch of text commands to display data coming in from addEventListeners
  textAlign(LEFT);
  textSize(20);
  fill('black');
  text("orientation data:", 25, 25);
  textSize(15);
  text("alpha: " + alpha, 25, 50);
  text("beta: " + beta, 25, 70);
  text("gamma: " + gamma, 25, 90);
  textSize(20);
  text("acceleration data:", 25, 125);
  textSize(15);
  text("x = " + x.toFixed(2), 25, 150); // .toFixed means just show (x) decimal places
  text("y = " + y.toFixed(2), 25, 170);
  text("z = " + z.toFixed(4), 25, 190);

  // MORE DECORATIONS - write that pretty ATK type on top.
  fill('white');
  noStroke();
  textSize(300);
  textAlign(CENTER);
  text("atk", width / 2, height / 2);

}

// HERE'S THE STUFF YOU NEED FOR READING IN accelerometer DATA!!!

// Read in accelerometer data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});


// accelerometer Data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});

function Car() {
  //attributes
  this.pos = createVector(100, 100); // vector = self contained x and y component
  this.vel = createVector(random(-5, 5), random(-5, 5)); //vector for velocity-5 foward and backwards
  this.r = random(255); //red attribute
  this.g = random(255); //green
  this.b = random(255); //blue
  this.size = random(20, 70); //random size

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
