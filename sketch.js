var setup = function () {
  createCanvas(600, 600);
  background(0);
  noStroke();

  fill("yellow"); // tractor beam
  triangle(200, 600, 300, 275, 400, 600);

  fill(150); // body
  ellipse(300, 275, 400, 100);

  fill(255); // dome part on top
  arc(300, 250, 100, 100, PI, TWO_PI, CHORD);
  ellipse(300, 250, 100, 25);

  fill("yellow"); // lights around rim
  ellipse(110, 275, 10, 10);
  ellipse(125, 287.5, 10, 10);
  ellipse(150, 297.5, 10, 10);
  ellipse(175, 302.5, 10, 10);
  ellipse(200, 307.5, 10, 10);
  ellipse(225, 310, 10, 10);
  ellipse(250, 312.5, 10, 10);
  ellipse(275, 313.75, 10, 10);
  ellipse(300, 315, 10, 10);
  ellipse(325, 313.75, 10, 10);
  ellipse(350, 312.5, 10, 10);
  ellipse(375, 310, 10, 10);
  ellipse(400, 307.5, 10, 10);
  ellipse(425, 302.5, 10, 10);
  ellipse(450, 297.5, 10, 10);
  ellipse(475, 287.5, 10, 10);
  ellipse(490, 275, 10, 10);




};
