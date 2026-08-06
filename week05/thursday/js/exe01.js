function setup() {
  // 1. 600 x 400 хэмжээтэй canvas үүсгэх
  createCanvas(600, 400);
}

function draw() {

  if (mouseX < width / 2) {
    background('#3498db'); 
  } else {
    background('#e67e22');
  }
  fill(255);
  noStroke(); 
  ellipse(mouseX, mouseY, 50, 50); 
}