
let size = 50;
let spacing = 20;

function setup() {
  createCanvas(600, 200);
}

function draw() {
  background(220);

  rect(50, 50, size, size);
  rect(50 + size + spacing, 50, size, size);
  rect(50 + (size + spacing) * 2, 50, size, size);
  rect(50 + (size + spacing) * 3, 50, size, size);
}