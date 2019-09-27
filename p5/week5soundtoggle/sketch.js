var song1;

function preload() {
  song1 = loadSound('assets/Goldbugv1.mp3');

}

function setup() {
  // put setup code here
  song1.play();
}
function draw() {
  // put drawing code here

}

function mouseReleased() {
  //if song is playing, pause it
  // otherwise, play it
  if (song1.isPlaying()) {
    song1.pause();
  }

  else{
    song1.play() ;
  }
}
//song1.play()
// song1.pause()
// song1.isPlaying()
