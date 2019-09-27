var cuteCat;

function setup() {
  // put setup code here
  createCanvas( 800, 800);

  cuteCat = loadImage("assets/cutecat.jpg");
}

function draw() {
  // put drawing code here
  image(cuteCat, 0, 0);
}
