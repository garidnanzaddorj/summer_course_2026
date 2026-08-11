function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(20, 30, 60); 



  for (let i = 0; i < 5; i++) {
    let x = 120 + i * 140;     
    let y = 100 + (i % 3) * 80;
    let size = 0.6 + i * 0.2;  

    drawFish(x, y, size);
  }
}

function drawFish(x, y, size) {
  push();
  translate(x, y); 

  fill(255, 100, 100);
  triangle(
    -50 * size, 0,
    -80 * size, -30 * size,
    -80 * size, 30 * size
  );

  fill(255, 150, 50);
  ellipse(0, 0, 100 * size, 60 * size);

  fill(255);
  circle(25 * size, -10 * size, 15 * size); 
  fill(0);
  circle(27 * size, -10 * size, 7 * size); 

  pop();
}