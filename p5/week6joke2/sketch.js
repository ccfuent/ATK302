let myState = 0;
let myTimer = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {

  switch(myState) {

      case 0:
      background('green');
      text("What do you call a fake noodle?",100, 100);

      myTimer-- ;
      if (myTimer >= 10) {
        myState++ ;  // this will go to the next state. You can also put myState = 3 or something
        myTimer = 0 ;  // people always forget to reset the timer!!

}
      break ;

      case 1: //punchline
      background('purple');
      text("An impasta!",100, 100);
      break ;

  }
}
