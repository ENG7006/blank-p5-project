function setup() {
  createCanvas(600, 600); // build canvas
}

function draw() {
  rect(250, 350, 200, 200); // draw the first floor
  triangle(220, 350, 480, 350, 350, 225); // draw the roof
  rect(325, 450, 50, 100); // draw a door
  rect(265, 375, 75, 50); // draw a window
  rect(360, 375, 75, 50); // draw a second window
}
