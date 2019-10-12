var bands = ['Why did the chicken cross the road? \n to get to the other side', 'What do you call a fish with no eye? \n fsh', 'What do you call an alligator detective? \n an investi-gator', 'Why did the scarecrow win an award? \n Because he was outstanding in his field.', 'What lights up a soccer stadium? \n A soccer match.', 'Why shouldn’t you write with a broken pencil? \n Because it’s pointless.'] ;
var aRandomBand = '' ;

function setup() {
  createCanvas(800, 800) ;
  textAlign(CENTER, CENTER) ;
}

function draw() {
  background("#c542f5") ;
  textSize(30);
  text(aRandomBand, width/2, height/2) ;
}

function mouseClicked() {

  var i = floor(random(bands.length)) ;  // floor changes the random to an integer

  aRandomBand = bands[i] ;


}
