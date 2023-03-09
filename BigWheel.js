class BigWheel {
  constructor(xPosition, yPosition, width, height) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.width = 80;
    this.height = 80;
  }
  display() {
    ellipseMode(CENTER);
    strokeWeight(25);
    stroke("Black");
    ellipse(this.xPosition, this.yPosition, this.width, this.height);
  }
}
