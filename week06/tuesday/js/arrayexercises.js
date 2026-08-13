let drops = [];
function setup() {
  createCanvas(1400, 1500);
  for (let i = 0; i < 20; i++) {
    drops.push({
      x: random(width),
      y: random(height),
      speed: random(1, 3),
      size: random(20, 50)
    });
  }
}
function draw() {
  background(20, 24, 38);
  fill(255, 120, 180);
  noStroke();
  for (let d of drops) {
    circle(d.x, d.y, d.size);
    d.y += d.speed;
    if (d.y > height) {
      d.y = 0;
      d.x = random(width);
    }
  }
}