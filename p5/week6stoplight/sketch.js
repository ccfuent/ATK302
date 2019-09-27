let myState = 0;
let myTimer = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  // make a yellow rectangle for the stoplight
  fill('yellow');
  rect(width/2, height/2, 150, 500);



  switch(myState) {

    case 0:
    fill('green');
    ellipse(width/2, height/2 + 150, 100, 100);

    fill('grey');
    ellipse(width/2, height/2, 100, 100);

    fill('grey');
    ellipse(width/2, height/2 - 150, 100, 100);

    myTimer = myTimer + 1;
    if (myTimer >=200) {
      myState = 1;
      myTimer = 0;}

    break;

    case 1:

    fill('grey');
    ellipse(width/2, height/2 + 150, 100, 100);

    fill('#fcba03');
    ellipse(width/2, height/2, 100, 100);

    fill('grey');
    ellipse(width/2, height/2 - 150, 100, 100);

    myTimer = myTimer + 1;
    if (myTimer >=100) {
      myState = 2;
      myTimer = 0;}

    break;


    case 2:

    fill('grey');
    ellipse(width/2, height/2 + 150, 100, 100);

    fill('grey');
    ellipse(width/2, height/2, 100, 100);

    fill('red');
    ellipse(width/2, height/2 - 150, 100, 100);

    myTimer = myTimer + 1;
    if (myTimer >=200) {
      myState = 0;
      myTimer = 0;}

    break;


  }

}
