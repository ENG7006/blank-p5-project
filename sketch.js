var car = {
  x: 150,
  y: 300,
  bodyLength: 400,
  bodyHeight: 200,
  cabinHeight: 100,
  cabinLength: 200,
  hoodLength: 100,
  wheelBase: 150,
  draw: function () {
    this.drawCarBody();
    this.drawCabin();
    this.drawWheel();
  },
drawCarBody: function () {
  rect(this.x, this.y, this.bodyLength, this.bodyHeight);
},
drawCabin: function () {
  rect(this.x + this.hoodLength, this.y - this.cabinHeight, this.cabinLength, this.cabinHeight);
},
drawWheel: function() {
  ellipse(this.x + this.hoodLength, this.y + this.bodyHeight, 100, 100);
  ellipse(this.x + this.hoodLength + this.cabinLength, this.y + this.bodyHeight, 100, 100);
},


};


function setup () {
  createCanvas (600, 600);
  car.draw ();
};

function draw () {

}
