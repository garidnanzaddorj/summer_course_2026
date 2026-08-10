function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("#dff6ff");
  drawTree();
}

function drawTree() {
  noStroke();

  fill("#8B4513");
  rect(280, 220, 40, 120);

  fill("#2E8B57");
  circle(300, 180, 120);
}