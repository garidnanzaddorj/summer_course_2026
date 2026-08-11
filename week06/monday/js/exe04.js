function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  drawBall(100, 200, 20);
  drawBall(200, 200, 50); 
  drawBall(320, 200, 90); 
}

function drawBall(x, y, size) {
  circle(x, y, size);
}