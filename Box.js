class Box {
  constructor(xPosition, yPosition, width, height) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.width = width;
    this.height = height;
    this.color = color;
  }
  display() {
    rectMode(CENTER);
    rect(this.xPosition, this.yPosition, this.width, this.height);
  }
}
