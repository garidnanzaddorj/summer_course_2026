function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  if (frameCount % 30 < 15) {
    fill(255, 255, 0); 
  } else {
    fill(50);
  }

  ellipse(200, 100, 80, 80);

  rectMode(CENTER);
  fill(30);
  rect(200, 270, 80, 200, 20);

  let timer = frameCount % 90;

  if (timer < 30) {
    fill(255, 0, 0); 
  } else {
    fill(60, 0, 0); 
  }
  ellipse(200, 210, 50, 50);

  if (timer >= 30 && timer < 60) {
    fill(255, 255, 0); 
  } else {
    fill(60, 60, 0); 
  }
  ellipse(200, 270, 50, 50);

  if (timer >= 60) {
    fill(0, 255, 0); 
  } else {
    fill(0, 60, 0); 
  }
  ellipse(200, 330, 50, 50);
}