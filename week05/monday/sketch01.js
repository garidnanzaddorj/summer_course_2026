function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(255);


  fill(255, 220, 0);
  stroke(0);
  strokeWeight(2);
  circle(100, 100, 120);

 
  noFill();
  stroke(0);
  strokeWeight(4);
  arc(80, 90, 16, 18, PI, TWO_PI);
  arc(120, 90, 16, 18, PI, TWO_PI);

 
  arc(100, 112, 45, 25, 0, PI);
}