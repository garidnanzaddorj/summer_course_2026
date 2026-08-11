function setup() {
  createCanvas(600, 350);
}

function draw() {
  background("#f5f5f5");


  let centerX = width / 2;
  let centerY = height / 2;

  let mouseDistance = getDistance(mouseX, mouseY, centerX, centerY);

  if (mouseDistance < 50) {
    fill("#E74C3C"); 
  } else {
    fill("#3498DB");
  }

  circle(centerX, centerY, 100);
}


function getDistance(x1, y1, x2, y2) {
  let d = dist(x1, y1, x2, y2);
  return d;                 
}