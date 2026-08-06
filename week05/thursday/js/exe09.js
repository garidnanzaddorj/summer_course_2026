let targetX;
let targetY;
let targetSize = 80;
let score = 0;

function setup() {
  createCanvas(600, 400);
  

  resetTarget();
  
  textSize(24);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(240);


  fill(231, 76, 60);
  noStroke();
  ellipse(targetX, targetY, targetSize);


  fill(255);
  ellipse(targetX, targetY, targetSize * 0.6);
  fill(231, 76, 60);
  ellipse(targetX, targetY, targetSize * 0.2);


  fill(44, 62, 80);
  text("Score: " + score, 70, 30);
}


function mousePressed() {

  let d = dist(mouseX, mouseY, targetX, targetY);


  if (d < targetSize / 2) {
    score += 1;      
    resetTarget(); 
  } else {
    score -= 1;
  }
}


function resetTarget() {
  let radius = targetSize / 2;
  targetX = random(radius, width - radius);
  targetY = random(radius, height - radius);
}