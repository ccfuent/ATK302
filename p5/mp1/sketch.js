function setup() {
  // put setup code here
createCanvas(700, 500);
}


function draw() {
  background("#3fc4d9");
  fill(0);

  if (mouseIsPressed) {
    // this is where the pressed shapes go
    noStroke();
        fill("#c9258f");
        quad(287, 242, 369, 182, 506, 242, 369, 300); //body
        quad(506, 242, 522, 203, 563, 196, 553, 228); //backfin top
        quad(506, 242, 522, 280, 563, 290, 553, 260); //backfin bottom
        triangle(369, 182, 407, 149, 452, 165); //fin top
        triangle(369, 300, 407, 329, 452, 314); //fin bottom

        fill("#9abae2");
        ellipse(334, 233, 20, 20); //eye
        fill("#5a449b");
        ellipse(332, 233, 12, 12); //eye

    //scale set 1
        fill("#6b2873");
        arc(417, 220, 25, 25, PI + PI/2, PI/2, OPEN); //scale1
        fill("#1d4489");
        arc(417, 242, 25, 25, PI + PI/2, PI/2, OPEN); //scale2
        fill("#9abae2");
        arc(417, 264, 25, 25, PI + PI/2, PI/2, OPEN); //scale3

    //scale set 2
        fill("#1d4489");
        arc(430, 225, 25, 25, PI + PI/2, PI/2, OPEN); //scale1
        fill("#6b2873");
        arc(430, 260, 25, 25, PI + PI/2, PI/2, OPEN); //scale3
        fill("#9abae2");
        arc(430, 242, 25, 25, PI + PI/2, PI/2, OPEN); //scale2

    //scale set 3
          fill("#6b2873");
          arc(443, 230, 25, 25, PI + PI/2, PI/2, OPEN); //scale1
          fill("#1d4489");
          arc(443, 254, 25, 25, PI + PI/2, PI/2, OPEN); //scale2

    //scale set 4
          fill("#6b2873");
          arc(456, 249, 25, 25, PI + PI/2, PI/2, OPEN); //scale2
          fill("#9abae2");
          arc(456, 235, 25, 25, PI + PI/2, PI/2, OPEN); //scale1

    //scale set 5
          fill("#1d4489");
          arc(469, 242, 25, 25, PI + PI/2, PI/2, OPEN); //scale1


          strokeWeight(4);
          stroke("#d9d9d9");
          fill("#3fc4d9");
          ellipse(82, 78, 20, 20); //6pack plastic 1

          strokeWeight(4);
          stroke("#d9d9d9");
          fill("#3fc4d9");
          ellipse(102, 65, 20, 20); //6pack plastic 2

          strokeWeight(4);
          stroke("#d9d9d9");
          fill("#3fc4d9");
          ellipse(94, 97, 20, 20); //6pack plastic 3

          strokeWeight(4);
          stroke("#d9d9d9");
          fill("#3fc4d9");
          ellipse(113, 85, 20, 20); //6pack plastic 4

          strokeWeight(4);
          stroke("#d9d9d9");
          fill("#3fc4d9");
          ellipse(107, 117, 20, 20); //6pack plastic 5

          strokeWeight(4);
          stroke("#d9d9d9");
          fill("#3fc4d9");
          ellipse(127, 104, 20, 20); //6pack plastic 6

//bubbles
          noStroke();

          fill("#6b2873");
          ellipse(267, 211, 13, 13); //bubble 0

          fill("#6b2873");
          ellipse(240, 160, 20, 20); //bubble 1

          fill("#6b2873");
          ellipse(173, 151, 35, 35); //bubble 2

          fill("#6b2873");
          ellipse(135, 97, 50, 50); //bubble 3

          fill("#6b2873");
          ellipse(257, 310, 35, 35); //bubble 4

          fill("#6b2873");
          ellipse(597, 96, 75, 75); //bubble 7


    //enviornment

        fill("#ffe091");
        rect(0, 450, 700, 55); //sand

        fill("#477d2a");
        triangle(37, 462, 118, 462, 45, 280); //seaweed1

        fill("#477d2a");
        triangle(95, 475, 154, 475, 136, 190); //seaweed2

        fill("#477d2a");
        triangle(163, 459, 190, 459, 175, 323); //seaweed3

        fill("#d60d0d");
        rect(309, 421, 25, 45); //can

        fill(255);
        rect(309, 432, 25, 15);//can label

        fill("#2529f7");
        quad(421, 469, 435, 431, 470, 435, 457, 469); //chip bag

        fill("#f2ea00");
        ellipse(446, 450, 20, 20); //logo on chip bag


//bubbles continued...
        fill("#6b2873");
        ellipse(297, 439, 55, 55); //bubble 5

        fill("#6b2873");
        ellipse(436, 437, 35, 35); //bubble 5

        fill("#6b2873");
        ellipse(340, 362, 20, 20); //bubble 6

//text
        textSize(15);
        textAlign(CENTER);
        fill(255);
        text('Introducing Oceansweep! She has the power to spit a special substance that attacks & disinegrates \
        garbage that falls into the ocean. She keeps all marine life safe with her special ability. \
        Garbage stands no match against Oceansweep!', 20, 10, 690, 500);
    


  }


  else {
    // this is where unpressed shapes go, build character first

//fish

noStroke();
    fill("#f48072");
    quad(287, 242, 369, 182, 506, 242, 369, 300); //body
    quad(506, 242, 522, 203, 563, 196, 553, 228); //backfin top
    quad(506, 242, 522, 280, 563, 290, 553, 260); //backfin bottom
    triangle(369, 182, 407, 149, 452, 165); //fin top
    triangle(369, 300, 407, 329, 452, 314); //fin bottom

    fill("#fedbc1");
    ellipse(334, 233, 20, 20); //eye
    fill("#00919e");
    ellipse(332, 233, 12, 12); //eye

//scale set 1
    fill("#f15c47");
    arc(417, 220, 25, 25, PI + PI/2, PI/2, OPEN); //scale1
    fill("#00919e");
    arc(417, 242, 25, 25, PI + PI/2, PI/2, OPEN); //scale2
    fill("#a2d9d3");
    arc(417, 264, 25, 25, PI + PI/2, PI/2, OPEN); //scale3

//scale set 2
    fill("#00919e");
    arc(430, 225, 25, 25, PI + PI/2, PI/2, OPEN); //scale1
    fill("#f15c47");
    arc(430, 260, 25, 25, PI + PI/2, PI/2, OPEN); //scale3
    fill("#a2d9d3");
    arc(430, 242, 25, 25, PI + PI/2, PI/2, OPEN); //scale2

//scale set 3
      fill("#f15c47");
      arc(443, 230, 25, 25, PI + PI/2, PI/2, OPEN); //scale1
      fill("#00919e");
      arc(443, 254, 25, 25, PI + PI/2, PI/2, OPEN); //scale2

//scale set 4
      fill("#f15c47");
      arc(456, 249, 25, 25, PI + PI/2, PI/2, OPEN); //scale2
      fill("#a2d9d3");
      arc(456, 235, 25, 25, PI + PI/2, PI/2, OPEN); //scale1

//scale set 5
      fill("#00919e");
      arc(469, 242, 25, 25, PI + PI/2, PI/2, OPEN); //scale1


      fill("#00919e");
      ellipse(259, 211, 20, 20); //bubble 1

      fill("#00919e");
      ellipse(276, 170, 35, 35); //bubble 2

      fill("#00919e");
      ellipse(268, 108, 50, 50); //bubble 2

//enviornment

    fill("#ffe091");
    rect(0, 450, 700, 55); //sand

    fill("#477d2a");
    triangle(37, 462, 118, 462, 45, 280); //seaweed1

    fill("#477d2a");
    triangle(95, 475, 154, 475, 136, 190); //seaweed2

    fill("#477d2a");
    triangle(163, 459, 190, 459, 175, 323); //seaweed3

    fill("#d60d0d");
    rect(309, 421, 25, 45); //can

    fill(255);
    rect(309, 432, 25, 15);//can label

    fill("#2529f7");
    quad(421, 469, 435, 431, 470, 435, 457, 469); //chip bag

    fill("#f2ea00");
    ellipse(446, 450, 20, 20); //logo on chip bag

    strokeWeight(4);
    stroke("#d9d9d9");
    fill("#3fc4d9");
    ellipse(82, 78, 20, 20); //6pack plastic 1

    strokeWeight(4);
    stroke("#d9d9d9");
    fill("#3fc4d9");
    ellipse(102, 65, 20, 20); //6pack plastic 2

    strokeWeight(4);
    stroke("#d9d9d9");
    fill("#3fc4d9");
    ellipse(94, 97, 20, 20); //6pack plastic 3

    strokeWeight(4);
    stroke("#d9d9d9");
    fill("#3fc4d9");
    ellipse(113, 85, 20, 20); //6pack plastic 4

    strokeWeight(4);
    stroke("#d9d9d9");
    fill("#3fc4d9");
    ellipse(107, 117, 20, 20); //6pack plastic 5

    strokeWeight(4);
    stroke("#d9d9d9");
    fill("#3fc4d9");
    ellipse(127, 104, 20, 20); //6pack plastic 6

    noStroke();
    fill("#8c8c2e");
    rect(588, 71, 20, 55); //garbage

//text
    textSize(15);
    textAlign(CENTER);
    fill(255);
    text('Introducing Oceansweep! She has the power to spit a special substance that attacks & disinegrates \
    garbage that falls into the ocean. She keeps all marine life safe with her special ability. \
    Garbage stands no match against Oceansweep!', 20, 10, 690, 500);
  }

}

function mouseReleased() {
    console.log(mouseX + ', ' + mouseY );
}
