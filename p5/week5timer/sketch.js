var timer= 200;

function setup() {
  createCanvas(800, 800);
  background('black');
}

function draw() {
  timer = timer - 1; //OR timer--;
  if (timer <= 0) {
    background(random(255), random(255), random (255)) ;
    timer = 200 ;
  }
}
