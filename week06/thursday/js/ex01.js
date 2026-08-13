function setup() {
  createCanvas(600, 300);
}

function draw() {
  background(240);

  let x = frameCount % width;
  let y = height / 2;

  fill('#0000FF');
  noStroke();
  circle(x, y, 60);
}