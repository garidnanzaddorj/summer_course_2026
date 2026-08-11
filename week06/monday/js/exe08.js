function setup() {
  createCanvas(600, 350);
}

function draw() {
  background("#f5f5f5");

  let size1 = calculateSize(5); 
  let size2 = calculateSize(10);

  fill("#4A90E2");
  circle(200, 175, size1); 

  fill("#E74C3C");
  circle(400, 175, size2);
}

function calculateSize(number) {
  return number * 20;
}