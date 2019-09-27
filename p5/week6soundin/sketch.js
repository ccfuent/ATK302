var mic;
var vol;
var y = 0 ;

function setup() {
  createCanvas(800, 800);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(100);

fill("#7aeff5");
noStroke();
ellipse(200, y, 100, 100) ;
  vol = mic.getLevel(); // level is between 0 and 1
  vol = vol * 100; // you may need to change this

  if (vol > 3) {
    // do something
    y++ ;

  }


  textSize(18);
  text("Click the screen first.  My volume is " + vol, 80, 400);


}


// you need to click the screen before the mic input will work.
function touchStarted() {
  getAudioContext().resume();
}


//code for mic input to get something to go up and down based on volume

// let mic;
//
// function setup() {
//   createCanvas(710, 200);
//
//   // Create an Audio input
//   mic = new p5.AudioIn();
//
//   // start the Audio Input.
//   // By default, it does not .connect() (to the computer speakers)
//   mic.start();
// }
//
// function draw() {
//   background(200);
//
//   // Get the overall volume (between 0 and 1.0)
//   let vol = mic.getLevel();
//   fill(127);
//   stroke(0);
//
//   // Draw an ellipse with height based on volume
//   let h = map(vol, 0, 1, height, 0);
//   ellipse(width / 2, h - 25, 50, 50);
// }

// you need to click the screen before the mic input will work.
// function touchStarted() {
//   getAudioContext().resume();
// }


//there are screen shots of changing shape color or background based on volume
