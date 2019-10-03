var myState = 0;
var myTimer = 0;
var x = 0;
var y = 0;
var yy = 0;
var fishLarge;
var titleScreen;
var garbage1;
var fish;
var sixPack;
var redCan;
var cleanOcean;

function setup() {

  createCanvas(700, 500);
  fishLarge = loadImage("assets/fishlarge.png");
  titleScreen = loadImage("assets/titleScreen.png");
  garbage1 = loadImage("assets/case2.png");
  fish = loadImage("assets/fishsmall.png");
  sixPack = loadImage("assets/sixpack.png");
  redCan = loadImage("assets/redCan.png");
  cleanOcean = loadImage("assets/cleanocean.png")
}

function draw() {

//every case different background or song or image

  switch(myState) {
//title screen
    case 0:
    image(titleScreen, 0, 0);
    break;


//fish
    case 1:
    background("#3fc4d9");
    image(fishLarge, 0, 0);
    myTimer = myTimer + 1 ;
    if (myTimer > 75) {
      myTimer = 0;
      myState = 2; //changes state to 2
}
    break;


//garbage falling
    case 2:
    background("#3fc4d9");
    image(sixPack, 40, y);
      y = y + 1;
    image(redCan, 400, yy);
      yy = yy + 3;

    myTimer ++ ;
    if (myTimer > 150) {
      myTimer = 0;
      myState = 3;
    }

    break;


// up and down fish moving
    case 3:
    image(garbage1, 0, 0);
    image(fish, x, 0);
      x = x + 2;

    myTimer ++ ;
    if (myTimer > 150) {
      myTimer = 0;
      myState = 4;
    }
    break;


//sparkly ocean
    case 4:

    image(cleanOcean, 0, 0);

    myTimer ++ ;
    if (myTimer > 200) {
      myTimer = 0;
      x = 0;
      y = 0;
      yy = 0;
      myState = 0;
    }
    break;


  }

}

function mouseReleased() {
  //could have a switch thing here too
if (myState ==0) { //== means check to see if its equal to 0 ; = means equal to 1
  myState = 1 ;

  }

}
