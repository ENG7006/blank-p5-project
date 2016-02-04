var car = {
  x: 100,
  y: 325,
  width: 300,
  height: 100,
  hoodLength: 75,
  cabinLength: 150,
  draw: function () {
    this.drawBody ();
    this.drawCabin();
    this.drawFrontWheel();
    this.drawBackWheel();
  },
  drawBody: function () {
    rect(this.x, this.y, this.width, this.height); // draw the car body
  },
  drawCabin: function () {
    rect(this.x + this.hoodLength, this.y - this.hoodLength, this.cabinLength, this.hoodLength); // draw the car cabin
  },
  drawFrontWheel: function () {
    ellipse(this.y, this.width + this.cabinLength, this.x / 2, this.height / 2); // draw the front wheel
  },
  drawBackWheel: function () {
    ellipse(this.x + this.hoodLength, this.width + this.cabinLength, this.x / 2, this.height / 2); // draw the back wheel
  },
};

function setup() {
  createCanvas(600, 600); // build canvas
  car.draw();
}

function draw() {
}
  //ellipse(175, 450, 50, 50); // draw back wheel
  //ellipse(325, 450, 50, 50); // draw front wheel
