function setup() {
  createCanvas(300, 300);
}

function draw() {
  fill('purple');
  noStroke();
  rect(100, 100, 100, 100);
  
}

function mouseReleased() {
  if ((mouseX > 100) && (mouseX < 200) && (mouseY > 100) && (mouseY < 200)) {

  console.log("beep");
  }
}
