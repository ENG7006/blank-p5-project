var setup = function () {
  createCanvas(600, 600);
  background(0);
  noStroke();

  fill("red");
  triangle(200, 500, 300, 300, 400, 500);
  triangle(250, 200, 300, 100, 350, 200);

  fill(150);
  rect(250, 200, 100, 300);

  fill(50);
  ellipse(300, 250, 50, 50);
  ellipse(300, 325, 50, 50);

  fill(203, 236, 247);
  ellipse(300, 250, 40, 40);
  ellipse(300, 325, 40, 40);

  fill(0);
  textSize(32);
  text("USA", 268, 450);

  fill("yellow");
  triangle(275, 500, 300, 575, 325, 500);

  fill("red");
  triangle(285, 500, 300, 550, 315, 500);



  // your code goes here
};
