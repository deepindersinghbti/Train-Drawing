class Wheel {
  constructor(xPosition, yPosition, width, height) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.width = width;
    this.height = width;
  }
  display() {
    ellipseMode(CENTER);
    strokeWeight(15);
    stroke("Black");
    ellipse(this.xPosition, this.yPosition, this.width, this.height);
  }
}
