
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(135, 206, 235);


  noStroke();
  fill(245, 230, 60);
  ellipse(380, 100, 90, 90);

  stroke(0);
  strokeWeight(2);


  fill(160, 40, 40);
  triangle(250, 190, 160, 240, 340, 240);

  fill(210, 180, 140);
  rect(175, 240, 150, 130);


  fill(210, 235, 245);
  rect(190, 255, 35, 30);
  rect(275, 255, 35, 30);


  fill(100, 50, 20);
  rect(230, 290, 40, 80);
}

