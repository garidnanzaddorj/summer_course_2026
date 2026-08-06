function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  let halfWidth = width / 2;
  let halfHeight = height / 2;

  if (mouseX < halfWidth && mouseY < halfHeight) {
    background('#e74c3c'); 
  } 

  else if (mouseX >= halfWidth && mouseY < halfHeight) {
    background('#3498db');
  } 

  else if (mouseX < halfWidth && mouseY >= halfHeight) {
    background('#f1c40f');
  }
  else{
    background('#2ecc71'); 
  }

  stroke(255);
  line(halfWidth, 0, halfWidth, height);
  line(0, halfHeight, width, halfHeight);


  fill(255);
  noStroke();
  circle(mouseX, mouseY, 15);
}