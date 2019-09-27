var luckiestGuy;
var x = 0;

function setup() {
  // put setup code here
  createCanvas( 800, 800);

  luckiestGuy = loadFont("assets/LuckiestGuy-Regular.ttf");
}

function draw() {
  // put drawing code here
  background("white");
  textFont(luckiestGuy, 50);
  fill("pink");
  text("Hello world", x, 50);
  
    x = x + 1;  //x++
    if (x > width){
      x = 0;
    }

  textSize(20);
  text("from chabela", 20, 100);
}
