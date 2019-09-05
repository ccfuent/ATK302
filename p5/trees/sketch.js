function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);

}
function draw(){
  background('#4296f5');
  noStroke();

  fill('#f5da42');//sun
  ellipse(70, 70, 72, 72);

  fill('#34b52d');//grass
  rect(0, 300, 720, 100);

  fill('#452c00');//trunk
  rect(557, 150, 50, 175);

  fill('#124500');//treecircle1
  ellipse(533, 150, 100, 100);

  fill('#124500');//treecircle2
  ellipse(555, 80, 100, 100);

  fill('#124500');//treecircle3
  ellipse(620, 150, 100, 100);

  fill('#124500');//treecircle4
  ellipse(610, 80, 100, 100);

  fill('#ffffff');//cloud1
  ellipse(250, 100, 90, 90);

  fill('#ffffff');//cloud2
  ellipse(265, 150, 90, 90);

  fill('#ffffff');//cloud3
  ellipse(200, 140, 90, 90);

  fill('#ffffff');//cloud4
  ellipse(310, 125, 90, 90);
  // fill(0, 0, 255);#452c00
  // triangle(18, 18, 18, 360, 81, 360);
  //
  // fill(102);
  // rect(0, 0, 100, 200);
  //
  // fill(204);
  // quad(189, 18, 216, 18, 216, 360, 144, 360);
  //
  // fill(255);
  // ellipse(10, 10, 72, 72);
  //
  // fill(204);
  // triangle(288, 18, 351, 360, 288, 360);
  //
  // fill(255);
  // arc(479, 300, 280, 280, PI, TWO_PI);
fill(255);
text(mouseX + ',' + mouseY, 30, 30);

}

function mouseReleased(){
  console.log(mouseX + ',' + mouseY);
}
