var cuteCat;

function setup() {
  // put setup code here
  createCanvas( 800, 800);

  cuteCat = loadImage("assets/fish.png");
}

function draw() {
  // put drawing code here
  image(cuteCat, 0, 0);
}
