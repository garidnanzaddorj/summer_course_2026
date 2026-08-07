let doorX = 250;
let doorY = 200;
let doorWidth = 100;
let doorHeight = 150;
let doorColor = "#8b4513";

function setup() {

  createCanvas(700, 450);
}

function draw() {

  background("#87ceeb");


  stroke(0);
  fill("#d35400");
  rect(150, 150, 300, 200);


  fill("#c0392b");
  triangle(150, 150, 300, 70, 450, 150);

 
  let isMouseOnDoor = mouseX > doorX && 
                      mouseX < doorX + doorWidth && 
                      mouseY > doorY && 
                      mouseY < doorY + doorHeight;

 
  if (isMouseOnDoor && mouseIsPressed) {
   
  } else if (isMouseOnDoor) {
   
    doorColor = "#f1c40f";
  } else {

    doorColor = "#8b4513";
  }

  
  fill(doorColor);
  rect(doorX, doorY, doorWidth, doorHeight);

 
  if (isMouseOnDoor && mouseIsPressed) {
    fill(0); 
    textSize(24);
    textAlign(CENTER, CENTER);
    text("OPEN", doorX + doorWidth / 2, doorY + doorHeight / 2);
  }
}