function setup() {
  createCanvas(800, 300);
}

function draw() {
  background("#f5f5f5");
  fill("#3498db");
  noStroke();

  let startX = 50;
  let gap = 75;
  let startSize = 15;
  let sizeIncrease = 6;
  let y = 150;

  for (let i = 0; i < 10; i++) {
    let x = startX + i * gap;
    let size = startSize + i * sizeIncrease;
    circle(x, y, size);
  }
}