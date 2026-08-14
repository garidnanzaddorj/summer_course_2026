function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(10, 10, 25);

  let centerX = width / 2;
  let centerY = height / 2;
  let sunSize = 80;

  fill(255, 204, 0);
  noStroke();
  ellipse(centerX, centerY, sunSize, sunSize);

  let radius1 = 130;
  let speed1 = 0.03;
  let angle1 = frameCount * speed1;

  let x1 = centerX + cos(angle1) * radius1;
  let y1 = centerY + sin(angle1) * radius1;

  noFill();
  stroke(255, 40);
  ellipse(centerX, centerY, radius1 * 2, radius1 * 2);

  fill(100, 180, 255);
  noStroke();
  ellipse(x1, y1, 24, 24);

  let radius2 = 220;
  let speed2 = 0.015;
  let angle2 = frameCount * speed2;

  let x2 = centerX + cos(angle2) * radius2;
  let y2 = centerY + sin(angle2) * radius2;

  noFill();
  stroke(255, 30);
  ellipse(centerX, centerY, radius2 * 2, radius2 * 2);

  fill(255, 100, 100);
  noStroke();
  ellipse(x2, y2, 32, 32);
}