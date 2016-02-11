var myRocket = {
x: 150,
y: 150,
direction: -1,

display: function() {
triangle(this.x - 75, this.y + 400, this.x + 100, this.y + 150, this.x + 300, this.y + 400);
ellipse(this.x + 100, this.y + 150, 221, 450);
triangle(this.x, this.y, this.x + 200, this.y, this.x + 100, this.y - 100);
},

update: function() {
this.move();
},

move: function() {
this.y += this.direction;
},
};




// give movableShape a nice, descriptive name to work with here
// (i.e., replace the variable name myShape with something more descriptive (e.g., myCar, myRocket).)
//var myRocket = movableRocket;

// Redefine drawShape() by putting your moving shape in here
// (Basically, you can copy and paste your code from last time, although you may wish to refactor it so that it's more readable.)
// That said, you may wish to try putting your unrefactored, raw drawing code from week 1 in here
//myRocket.drawRocket = function () {
//};
//You will also need to do some work to set the speed of the shape. How do you want it to move? What do you need to change to get it to move?

var setup = function() {
createCanvas(600, 600);
};

var draw = function() {
  background(100); // refresh the background
  myRocket.display(); // display myShape
  myRocket.update(); // and then update it
};
