var setup = function () {
  createCanvas(600, 600);
  background(200);
  noStroke();

  fill(184, 9, 32); // the actual hot dog
  ellipse(100, 300, 100, 100);
  ellipse(500, 300, 100, 100);
  rect(100, 250, 400, 100);

  fill(240, 227, 206); // the hot dog bun
  ellipse(125, 350, 125, 125);
  ellipse(475, 350, 125, 125);
  rect(125, 287.5, 350, 125);

  fill("yellow"); // mustard
  ellipse(100, 250, 20, 20);
  ellipse(500, 250, 20, 20);
  rect(100, 240, 400, 20)

  textSize(50);
  fill(0);
  text("Hot Dog City", 150, 500);

};
