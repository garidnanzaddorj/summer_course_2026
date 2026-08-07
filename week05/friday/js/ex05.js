function setup() {
  createCanvas(800, 300);
}

function draw() {
  background("#f5f5f5");

  noStroke();

  for (let i = 0; i < 10; i++) {
    let redValue = 50 + i * 20;
    fill(redValue, 100, 180);
    let x = 50 + i * 75;
    circle(x, 150, 55);
  }
}