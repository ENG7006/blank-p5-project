function setup() {
  createCanvas(600, 600); // build canvas
}

function draw() {
  ellipse(250, 400, 350, 100); // draw the car body
  ellipse(100, 450, 50, 50); // draw back wheel
  ellipse(100, 450, 30, 30); // draw back hubcap
  ellipse(400, 450, 50, 50); // draw front wheel
  ellipse(400, 450, 30, 30); // draw back hubcap
  ellipse(431, 397, 10, 20); // draw headlight
  rect(270, 360, 60, 75); // draw front door
  rect(170, 360, 60, 75); // draw back door
  ellipse(391, 351, 5, 45); // draw windshield
}
