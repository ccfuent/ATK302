function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
  background('#4296f5');
  noStroke();

  fill(0, 0, 255);
  triangle(18, 18, 18, 360, 81, 360);

  fill(102);
  rect(0, 0, 100, 200);

  fill(204);
  quad(189, 18, 216, 18, 216, 360, 144, 360);

  fill(255);
  ellipse(10, 10, 72, 72);

  fill(204);
  triangle(288, 18, 351, 360, 288, 360);

  fill(255);
  arc(479, 300, 280, 280, PI, TWO_PI);
}
