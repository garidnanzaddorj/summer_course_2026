function drawBall(x, y, size, r, g, b) {
  fill(r, g, b);   
  circle(x, y, size);    
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawBall(50, 200, 40, 255, 0, 0);

  drawBall(120, 200, 40, 0, 255, 0);

  drawBall(190, 200, 40, 0, 0, 255);

  drawBall(260, 200, 40, 255, 255, 0);

  drawBall(330, 200, 40, 255, 0, 255);
}