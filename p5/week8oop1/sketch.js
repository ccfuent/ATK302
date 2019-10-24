var myCar1 ; //declares interval
var myCar2 ; //declares interval
var myCar3 ; //declares interval

function setup() {

  createCanvas(800, 800);
  myCar1 = new Car() ; // spawn 1 car
  myCar2 = new Car() ;
  myCar3 = new Car() ;
}

function draw() {
  background(100) ;

  myCar1.display();
  myCar1.drive();

  myCar2.display();
  myCar2.drive();

  myCar3.display();
  myCar3.drive();

}

function Car() {
  //attributes-what the car looks like
    this.x = random(width) ;
    this.y = random(height);
    this.red = random(255);
    this.green = random(255);
    this.blue = random(255);
    this.vel = random(5, 10);

  //methods-what it does
    this.display = function () {
      fill(this.red, this.green, this.blue);
      rect(this.x, this.y, 100, 50);
    }

    this.drive = function () {
      this.x = this.x + this.vel;
        if (this.x > width) {
          this.x = 0;
          // this.r = random(255); by putting this here this only changes the color to random when it loops
        }
    }

}


// rect(x, 100, 100, 50); // test how to move a rect across screen
//   x = x + 5;
//   if (x > width) x = 0;
