function setup() {
  createCanvas(600, 600); // build canvas
}

function draw() {
  triangle(155, 350, 250, 400, 150, 450); // draw the shark tail
  triangle(162, 360, 240, 400, 158, 440); // draw inside of shark's tail
  ellipse(375, 400, 350, 100); // draw the shark body
  triangle(340, 300, 340, 350, 420, 352); // draw the shark fin
  ellipse(460, 390, 5, 5); // draw the eye
  line(475, 420, 532, 420); // draw the mouth
  triangle(475, 421, 485, 421, 480, 425); // draw a tooth
  triangle(490, 421, 500, 421, 495, 425); // draw a tooth
  triangle(505, 421, 515, 421, 510, 425); // draw a tooth
  triangle(520, 421, 530, 421, 525, 425); // draw a tooth
  ellipse(500, 300, 5, 5); // draw an air bubble
  ellipse(510, 270, 5, 5); // draw an air bubble
  ellipse(490, 240, 5, 5); // draw an air bubble
}
