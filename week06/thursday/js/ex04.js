function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(30);

  let centerY = height / 2;
  let speed = 0.05;
  let amplitude = 80;
  let totalCircles = 10;

  for (let i = 0; i < totalCircles; i++) {
    let x = map(i, 0, totalCircles - 1, 100, width - 100);
    let wave = sin(frameCount * speed + i * 0.5);
    let y = centerY + wave * amplitude;

    let size = map(wave, -1, 1, 20, 60);

    let r = map(i, 0, totalCircles - 1, 255, 50);
    let g = map(wave, -1, 1, 100, 255);
    let b = map(i, 0, totalCircles - 1, 50, 255);

    fill(r, g, b);
    noStroke();
    ellipse(x, y, size, size);
  }
}