var myState = 0;
var myTimer = 0;
var myBColor ;

function setup() {
  createCanvas(800, 800);
  myBColor = color(random(255), random(255), random(255)) ; //random color every time the timer changes
}

function draw() {

  switch(myState) {
    case 0:
    background('myBColor');
    text("case 0", 100, 100);

    myTimer++ ; //OR myTimer = myTimer +1; timer ran out
    if (myTimer >=200) {
      myState = 1;
      myTimer = 0;
      myBColor = color(random(255), random(255), random(255)) ;
    }
    break;

    case 1:
    background(myBColor);
    text("case 1", 100, 100);
    myTimer++ ; //OR myTimer = myTimer +1;
    if (myTimer >=200) {
      myState = 2;
      myTimer = 0;
      myBColor = color(random(255), random(255), random(255)) ;
    }
    break;

    case 2:
    background(myBColor);
    text("case 2", 100, 100);
    myTimer++ ; //OR myTimer = myTimer +1;
    if (myTimer >=200) {
      myState = 0;
      myTimer = 0;
      myBColor = color(random(255), random(255), random(255)) ;
    }
    break;
  }
}
