var x = 0;

function setup() {
  // put setup code here

  createCanvas(500,200);
}

function draw() {
  // put drawing code here
  background(100);
  fill('pink');
  textSize(32);
  text("FUCK", x, height/2);
    x +=3;

    if(x > 500) {
      x = 0;
    }
}
