let myState = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {

  switch(myState) {

      case 0:
      background('green');
      text("why did the cookie go to the hospital?",100, 100);
      //joke 2 tmer code goes here
      break ;

      case 1: //punchline
      background('purple');
      text("Because he felt crummy",100, 100);
      break ;

  }
}

function mouseReleased(){
  myState = myState + 1;
  //if state is greater than 1 set it equal to 0
  if(myState > 1) {
    myState = 0;
  }

  }
