var myState = 0;
var myTimer = 0; //timer variable

function setup() {

  createCanvas(800, 800);

}

function draw() {

//every case different background or song or image

  switch(myState) {
    case 0:
    break;

    case 1:
    //timer code
    myTimer ++ ;
    if (myTimer > 200) {
      myTimer = 0;
      myState = 2; //changes state to 2
    }
    break;

    case 2:
    break;

    case 3:
    break;

    case 4:
    break;


  }

}

function mouseReleased() {
  //could have a switch thing here too
if (myState ==0) { //== means check to see if its equal to 0 ; = means equal to 1
  myState = 1 ;
}

}
