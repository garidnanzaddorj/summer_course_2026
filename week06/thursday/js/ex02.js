function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(220); 

  let baseSize = 100;    
  let amplitude = 50; 
  let speed = 0.05;

  let size = baseSize + sin(frameCount * speed) * amplitude;

  circle(width / 2, height / 2, size);
}