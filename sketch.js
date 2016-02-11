function setup() {
  createCanvas(600, 600); // build canvas
}

function draw() {
  triangle(100, 500, 500, 500, 300, 100); // draw the mountain
  line(234, 230, 260, 205); // begin the crest
  line(260, 205, 280, 235); // continue the crest
  line(280, 235, 300, 205); // continue the crest
  line(300, 205, 320, 235); // continue the crest
  line(320, 235, 340, 205); // continue the crest
  line(340, 205, 367, 235); // finish the crest
}
