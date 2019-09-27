var song1;

function preload(){

song1 = loadSound('assets/Dr_Wylie_-_09_-_Happy_Money.mp3');
}
function setup() {
  // put setup code here
  createCanvas(800, 200);
  background(255, 0, 0);
  song1.play();

}

function draw() {
  // put drawing code here
}

function mouseReleased(){
  song1.stop();
}
