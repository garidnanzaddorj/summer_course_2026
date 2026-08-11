function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);

  drawHouse(50, 150);
  drawHouse(300, 150);
  drawHouse(550, 150);
}

function drawHouse(x, y) {

  fill(200, 150, 100);
  rect(x, y, 180, 160);


  triangle(x - 10, y, x + 90, y - 70, x + 190, y);

  rect(x + 70, y + 90, 40, 70);

  fill(255);
  rect(x + 20, y + 30, 40, 40);

  rect(x + 120, y + 30, 40, 40);
}