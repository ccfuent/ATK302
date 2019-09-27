var x = 0;
var y = 0;

function setup() {
  // put setup code here
  createCanvas(300, 300);
}

function draw() {
  // put drawing code here
  background(100);
  rect(x, height/2, 10, 10);
    x = x + 5;   // or x += 5 velocity of x
    if (x > width) {
      x = 0;
    }

rect(width/2, y, 10, 10);
    y += 3; // velocity of x
    if (y > height) {
        y = 0;
      }

}
