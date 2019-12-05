var myState = 1;
var myScore;
var myLogo;
var capriola;
var corben;

function preload() {
  myLogo = loadImage("assets/thetquizlogo-02.png");
  capriola = loadFont("assets/Capriola.ttf");
  corben = loadFont("assets/Corben.ttf");

}

function setup() {
createCanvas(windowWidth, windowHeight);
unloadScrollBars();
imageMode(CENTER);
textAlign(CENTER);
rectMode(CENTER);


}

function draw() {
background('#455160'); //gray
noStroke();




switch (myState) {
  case 0:
  image(myLogo, width/2, height/2-50, 152.2*3, 118.8*3);
  fill('#d8d8d8'); //white
  textSize(16);
  textFont(capriola);
  text("Click \"START\" to play", width/2, height/2+190);
  fill('#e1cb28'); //yellow
  rect(width/2, height/2+240, 120, 50, 10);
  fill('#455160'); //gray
  textSize(28);
  text('START', width/2, height/2+250);
  break;

  case 1:
  image(myLogo, width/12, height/7, 152.2, 118.8)
  break;

  case 2:
  break;
}

fill('#e1cb28');
rect(width/2, height-50, windowWidth, 100); //yellow bar
fill('black');
textFont(corben);
textSize(60);
text('Score: 1000', 190, height-15); //Score
fill('#455160');
rect(width/2+100, height-50, 400, 75); //Scoreboard
fill('black');
textSize(100);
textFont(corben);
text('T', width-100, height-15); //Progress T
textSize(12);
text("10/20", width-150, height- 15); //Question progress






}

function mouseReleased () {

  console.log(mouseX + ',' + mouseY);
}

function unloadScrollBars() {
  document.documentElement.style.overflow = 'hidden'; // firefox, chrome
  document.body.scroll = "no"; // ie only
}
