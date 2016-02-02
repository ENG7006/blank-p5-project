var door = {
  x: 100,
  y: 100,
  doorWidth: 300,
  doorHeight: 400,
  hingeWidth: 10,
  hingeHeight: 20,
  handleSize: 20,
  draw: function() {
    this.drawDoorFrame();
    this.drawHinges();
    this.drawHandle();
  },
  drawDoorFrame: function() {
    rect(this.x, this.y, this.doorWidth, this.doorHeight); //Draw a door frame
  },
  drawHinges: function() {
    this.drawDynamicHinge(40);
    this.drawDynamicHinge(195);
    this.drawDynamicHinge(350);
    //rect(this.x, this.y + 40, this.hingeWidth, this.hingeHeight); //Draw top hinge
    //rect(this.x, this.y + 195, this.hingeWidth, this.hingeHeight); //Draw middle hinge
    //rect(this.x, this.y + 350, this.hingeWidth, this.hingeHeight); //Draw bottom hinge
  },
  drawDynamicHinge: function(hingeY) {
    rect(this.x, this.y + hingeY, this.hingeWidth, this.hingeHeight);
  },
  drawHandle: function() {
    ellipse(this.x + 275, this.y + 225, this.handleSize, this.handleSize); //Draw handle
  }
};

function setup() {
  createCanvas(800, 800); //canvas size
  background(225); //off-white background
  door.draw();
  door.x = door.x + 350;
  door.draw();
}
