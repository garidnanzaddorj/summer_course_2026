let targetX = 100;
let targetY = 200;
let targetSize = 70;
let targetSpeed = 4;
let score = 0;
let lives = 3;
let gameState = "playing";

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  textSize(20);
}

function draw() {
  background(240);

  if (gameState === "playing") {
    targetX += targetSpeed;


    let radius = targetSize / 2;
    if (targetX - radius <= 0 || targetX + radius >= width) {
      targetSpeed *= -1;
    }


    fill("#e74c3c");
    stroke("#c0392b");
    strokeWeight(3);
    ellipse(targetX, targetY, targetSize);


    fill("#ffffff");
    ellipse(targetX, targetY, targetSize * 0.6);
    fill("#e74c3c");
    ellipse(targetX, targetY, targetSize * 0.2);

  } else if (gameState === "gameOver") {

    fill("#e74c3c");
    textSize(40);
    text("GAME OVER", width / 2, height / 2 - 20);
    
    fill("#7f8c8d");
    textSize(18);
    text("Double click to restart", width / 2, height / 2 + 30);
  }


  fill("#2c3e50");
  noStroke();
  textSize(20);
  textAlign(LEFT, TOP);
  text("Score: " + score, 20, 20);
  text("Lives: " + lives, 20, 50);
  textAlign(CENTER, CENTER); 
}

function mousePressed() {

  if (gameState === "playing") {
    let d = dist(mouseX, mouseY, targetX, targetY);

    if (d < targetSize / 2) {
     
      score += 1;
      

      if (targetSpeed > 0) {
        targetSpeed += 0.5;
      } else {
        targetSpeed -= 0.5;
      }
      
      targetY = random(targetSize / 2, height - targetSize / 2);
    } else {
асах
      lives -= 1;


      if (lives <= 0) {
        gameState = "gameOver";
      }
    }
  }
}

function doubleClicked() {

  score = 0;
  lives = 3;
  targetSpeed = 4;
  targetX = 100;
  targetY = 200;
  gameState = "playing";
}