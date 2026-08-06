function setup() {

  createCanvas(600, 400);
}

function draw() {

  if (mouseX < width / 2) {
    background('#d48116ff'); 
  } else {
    background('#223fe6ff'); 
  }
  fill(255);
  noStroke();
  circle(mouseX, mouseY, 50); 
}