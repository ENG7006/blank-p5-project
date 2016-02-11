function setup() {
  createCanvas(600, 600); // build canvas
}

function draw() {
  triangle(250, 450, 450, 450, 350, 350); // draw base
  ellipse(350, 250, 150, 300); // draw main part of rocket
  triangle(293, 150, 407, 150, 350, 50); // draw top
  ellipse(360, 200, 25, 25); // draw window
  ellipse(360, 250, 25, 25); // draw window 2
  ellipse(360, 300, 25, 25); // draw window 3
}
