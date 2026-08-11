
function calculateHeadSize(bodySize) {

  let headSize = bodySize * 0.6;
  return headSize;
}


function drawRobot(x, y, bodySize, r, g, b) {

  let headSize = calculateHeadSize(bodySize);

  stroke(0);
  fill(150); 

  rect(x - bodySize * 0.3, y + bodySize / 2, bodySize * 0.2, bodySize * 0.6);
  rect(x + bodySize * 0.1, y + bodySize / 2, bodySize * 0.2, bodySize * 0.6);


  rect(x - bodySize * 0.7, y - bodySize * 0.3, bodySize * 0.2, bodySize * 0.7);
  rect(x + bodySize * 0.5, y - bodySize * 0.3, bodySize * 0.2, bodySize * 0.7);

  
  fill(r, g, b);
  rectMode(CENTER);
  rect(x, y, bodySize, bodySize);
  let headY = y - bodySize / 2 - headSize / 2;
  fill(r, g, b);
  rect(x, headY, headSize, headSize);

  fill(255); 
  let eyeOffset = headSize * 0.25;
  let eyeSize = headSize * 0.2;
  ellipse(x - eyeOffset, headY - eyeOffset / 2, eyeSize, eyeSize);
  ellipse(x + eyeOffset, headY - eyeOffset / 2, eyeSize, eyeSize);

  fill(0);
  ellipse(x - eyeOffset, headY - eyeOffset / 2, eyeSize * 0.5, eyeSize * 0.5);
  ellipse(x + eyeOffset, headY - eyeOffset / 2, eyeSize * 0.5, eyeSize * 0.5);
}

function setup() {
  createCanvas(800, 500);
  background(240);



 
  drawRobot(150, 250, 80, 230, 80, 80);

  drawRobot(400, 250, 140, 70, 130, 230);

  drawRobot(650, 250, 100, 80, 200, 120);
}