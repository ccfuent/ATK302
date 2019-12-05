var myState = 0;
var myScore = 0;
var numQuestionsAsked = 0;
var myLogo;
var capriola;
var corben;
var kering;
var n;
var slider;
var imagesArray = [];

// THIS ONE POINTS TO YOURS!!!
var myQuiz = '1tTYEvW3bssQF9XLH88e7n7VrTGK4mwPCPnAyCZRuvFM';


var questionsArray = [];
var rq = 0;
var timer = 0;
var randomAnswer = 0;
var correctLineTop = 175; // this is the top-most of where the correct answer is and it gets reset in the question display

function preload() {
  myLogo = loadImage("assets/thetquizlogo-02.png");
  capriola = loadFont("assets/Capriola.ttf");
  corben = loadFont("assets/Corben.ttf");
  kering = loadImage("assets/KER_ING-03.png");
  n = loadImage("assets/N-04.png");

  // for (var i = 0; i < 18; i++) {
  //   imagesArray[i] = loadImage("assets/"+i+".png");
  // }

}

function setup() {
  createCanvas(1400, 600);
  unloadScrollBars();
  imageMode(CENTER);
  textAlign(CENTER);
  rectMode(CENTER);
  slider = createSlider(0, 100, 10);
  slider.hide();

  let settings = {
    key: myQuiz, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings);

}

function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called namesArray
  for (let i = 1; i < data.length; i++) {
    questionsArray.push(new Question(i, data[i].Question, data[i].A, data[i].B, data[i].C, data[i].D, data[i].Answer));
  }
  for (var i = 0; i < data.length; i++) {
    imagesArray[i] = loadImage("assets/"+i+".png");
  }

}

function draw() {
  noStroke();

  switch (myState) {
    case 0:
    textAlign(CENTER);
      background('#455160'); //gray
      image(myLogo, 600, 250, 152.2 * 3, 118.8 * 3);
      fill('#d8d8d8'); //white
      textSize(16);
      textFont(capriola);
      text("Click \"START\" to play", 600, 490);
      fill('#e1cb28'); //yellow
      rect(600, 540, 120, 50, 10);
      fill('#455160'); //gray
      textSize(28);
      text('START', 600, 550);
      break;

    case 1:
      // get a random question out
      background('#455160'); //gray
      textAlign(LEFT);
      image(myLogo, 100, 85.7142857, 152.2, 118.8)

      fill('#e1cb28');
      rect(600, 550, 1400, 100); //yellow bar
      fill('black');
      textFont(corben);
      textSize(60);
      text("Score: " + myScore*100, 50, 585); //Score
      fill('#455160');
      fill('black');
      textSize(100);
      textFont(corben);
      textSize(12);
      text(numQuestionsAsked + " / 33", 1050, 585); //Question progress

      var m = floor(random(questionsArray.length));
  //    m++ ;
      console.log("doing question "+ m) ;
      rq = questionsArray[m];

      if (rq != null) { // once in a while rq ends up null, not sure why.
        rq.display();
questionsArray.splice(m,1);
        myState = 2;
      } else {
        console.log("received a null rq number" + m);
        myState = 1;
      }
      break;

    case 2:

      break;

    case 20:
    //background display
    background('#455160'); //gray
    textAlign(LEFT);
    image(myLogo, 100, 85.7142857, 152.2, 118.8)
    fill('#e1cb28');
    rect(600, 550, 1400, 100); //yellow bar
    fill('black');
    textFont(corben);
    textSize(60);
    text('Score:' + myScore*100, 50, 585); //Score
    fill('black');
    textSize(12);
    text(numQuestionsAsked + " / 33", 1050, 585); //Question progress

    // display the question
    fill('#e1cb28');
    textSize(32);
    text('Kern the Word Correctly', 750, 150);


    slider.position(390, 250);
    image(kering, 450, 200, 761 / 3, 198 / 3);
    image(n, slider.value()+400, 200, 761 / 3, 198 / 3);
    slider.show();


    fill('#d8d8d8');
    rect(455, 320, 75, 25, 10);
    fill('#455160');
    textAlign(CENTER);
    textSize(18);
    text('Done', 455, 325);
    break;

  case 21:
    slider.hide();
    myState = 100;
    break;



    case 100:
      // go to a random state!

      // if numQuestionsAsked == 10, go to state 0 or some "win" state?
      if (numQuestionsAsked == 33) {
        myState = 101;
      } else {
        // what state to go to?
        // most of the time, let's go to state 1.
        let whatState = random(100);
        if (whatState > 10) {
          myState = 1;
        } else {
          if (whatState < 5) {
            myState = 20;
          } else {
            myState = 30;
          }
        }
      }

      break;

    case 101:
      background('grey');
      text("Thanks for playing!\nScore: " + myScore + "\\" + numQuestionsAsked, 600, 300);
      break;
  }



}



function mouseReleased() {
  switch (myState) {

    case 0: // the splash screen
      myState = 100; // 100 is the state that goes to a random thingy
      break;


    case 2: // the random question pulled from database
      if ((mouseX > 740) && (mouseY > correctLineTop) && (mouseY < correctLineTop + 50)) {
        myScore++;
        console.log('yay');
      } else {
        console.log('nope!');
      }
      numQuestionsAsked++; // maybe this only gets done if mouseX > 740?

      myState = 100; // 100 is the state that goes to a random thingy
      break;

      case 20: //kerning
          //myState = 100;
          if ((mouseX > 418) && (mouseX < 494) && (mouseY > 308) && (mouseY < 334)) {
            myState = 21;
          }

          if ((mouseX > 418) && (mouseX < 494) && (mouseY > 308) && (mouseY < 334) && (slider.value > 453) && (slider.value < 457)) {
            myScore++;
          }

      case 21:
      break;

    case 30:
      myState = 100;
      break;

    case 101:
      myState = 0;
      // this is a good place to reset everything if you need to
      numQuestionsAsked = 0;
      myScore = 0;
      break;

  }

  console.log(mouseX + ',' + mouseY);
}

function unloadScrollBars() {
  document.documentElement.style.overflow = 'hidden'; // firefox, chrome
  document.body.scroll = "no"; // ie only
}


// The QUESTION Class!!!
function Question(myNumber, myQuestion, myA, myB, myC, myD, myAnswer) {

  // attributes
  this.pos = createVector(random(width), random(height));
  this.question = myQuestion;
  this.a = myA;
  this.b = myB;
  this.c = myC;
  this.d = myD;
  this.answer = myAnswer; // we aren't using this.
  this.number = myNumber;


  // methods
  this.display = function() {

    // display the question
    fill('#e1cb28');
    textSize(32);
    //if the line is too long, then put the first line of text up a line and add a fourth and fifth parameter
    rectMode(CORNER);
    if (this.question.length > 24) {
      textLeading(35);
      text(this.question, 750, 75, 400, 350);
    } else {
      text(this.question, 750, 150);
    }

    rectMode(CENTER);
    textLeading();

    // display the image
    image(imagesArray[this.number], 450, 280, 400, 400);
  //image(imagesArray[18], 450, 280, 400, 400);

    // display the answers
    textFont(capriola);
    textSize(16);
    fill('#d8d8d8');

    // push all the answers onto a temporary array
    var ary = [];
    ary.push(this.a);
    ary.push(this.b);
    ary.push(this.c);
    ary.push(this.d);

    // go through the temporary array 4 times and "pop" and display a random answer
    for (var i = 0; i < 4; i++) {

      // get a random answer out
      var r = floor(random(ary.length)); // choose a random answer to take out

      randomAnswer = ary[r]; // here's the random answer (a String)
      //  console.log("randomAnswer = " + randomAnswer) ;
      ary.splice(r, 1); // pop that element out of the array so we don't re-use it

      if (randomAnswer.charAt(0) == "*") { // is it the correct answer?
        randomAnswer = randomAnswer.substr(1); // delete that star off (char 0) if it is!
        correctLineTop = 175 + (i * 50); // set the correct line top depending on i
      }

      text(randomAnswer, 750, 200 + i * 50); // display that answer

    }

  }

}
