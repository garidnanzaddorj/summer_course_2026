let barWidth = 50;
let startX = 70;
let gap = 65;

function setup() {
  createCanvas(800, 450);
  textAlign(CENTER);
  textSize(16);
}

function draw() {
  background("#f5f5f5");

  for (let i = 0; i < 10; i++) {
    let x = startX + i * gap;
    let barHeight = 250 - Math.abs(i - 4.5) * 40; 
    let y = 400 - barHeight;

    fill(100 + i * 15, 80, 180 - i * 10);
    noStroke();
    rect(x, y, barWidth, barHeight);

    fill("#333333");
    text(i + 1, x + barWidth / 2, y - 10);
  }
}