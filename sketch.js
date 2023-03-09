var body1, body2;
var bumper;
var outlet1, outlet2;
var roof;
var chain1, chain2, chain3;
var cart1, cart2, cart3;
var wheel1, wheel2, wheel3, wheel4, wheel5, wheel6, wheel7, wheel8;

function setup() {
  createCanvas(1000, 400);
}

function draw() {
  background("Yellow");

  strokeWeight(2);
  stroke("Blue");

  fill("Cyan");
  body1 = new Box(195, 210, 250, 100);
  body2 = new Box(245, 130, 150, 60);

  bumper = new Box(65, 210, 10, 60);

  outlet1 = new Box(100, 125, 25, 70);
  outlet2 = new Box(100, 80, 35, 20);

  roof = new Box(245, 90, 170, 20);

  chain1 = new Box(340, 250, 40, 10);
  chain2 = new Box(530, 250, 40, 10);
  chain3 = new Box(720, 250, 40, 10);

  cart1 = new Box(435, 210, 150, 100);
  cart2 = new Box(625, 210, 150, 100);
  cart3 = new Box(815, 210, 150, 100);

  wheel1 = new Wheel(125, 265, 55, 95);
  wheel2 = new BigWheel(250, 250, 80, 80);
  wheel3 = new Wheel(395, 265, 50, 50);
  wheel4 = new Wheel(475, 265, 50, 50);
  wheel5 = new Wheel(585, 265, 50, 50);
  wheel6 = new Wheel(665, 265, 50, 50);
  wheel7 = new Wheel(775, 265, 50, 50);
  wheel8 = new Wheel(855, 265, 50, 50);

  body1.display();
  body2.display();

  bumper.display();

  outlet1.display();
  outlet2.display();

  roof.display();

  chain1.display();
  chain2.display();
  chain3.display();

  cart1.display();
  cart2.display();
  cart3.display();

  wheel1.display();
  wheel2.display();
  wheel3.display();
  wheel4.display();
  wheel5.display();
  wheel6.display();
  wheel7.display();
  wheel8.display();
}
