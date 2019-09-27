var myState = 0;

function setup() {
  createCanvas(800,800);
}

function draw() {
  switch(myState){
    case 0:
    background("pink");
    text("case 0", 100, 100);
    break ;

    case 1:
    background("purple");
    text("case 1", 100, 100);
    break ;

    case 2:
    background("yellow");
    text("case 2", 100, 100);
    break ;

  }
}

function mouseReleased(){
  //add one to myState
  //if myState got past 2 reset it to 0
  myState = myState + 1; // OR myState++

  if (myState > 2) {
   myState = 0;
  }

  // OR myState = (myState + 1) % 3; dividing it by three and taking its remainder
}
