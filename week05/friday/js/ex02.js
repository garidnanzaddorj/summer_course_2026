 let lightColor = "#555555";
let roomColor = "#222222";

function setup() {

  createCanvas(600, 400);
}

function draw() {
  
  if (mouseIsPressed) {
    roomColor = "#fff3b0";   
    lightColor = "#ffd60a";  
  } else {
    roomColor = "#222222";   
    lightColor = "#555555"; 
  }

  
  background(roomColor);

 
  stroke(100);
  strokeWeight(2);
  line(300, 0, 300, 100); 

  fill(lightColor);
  noStroke();
  ellipse(300, 120, 50, 50); 
  rectMode(CENTER);
  rect(300, 100, 20, 15);    

  fill("#8b5a2b"); 
  rect(300, 360, 400, 20);  
  rect(130, 385, 20, 30);   
  rect(470, 385, 20, 30);   

  textAlign(CENTER, CENTER);
  textSize(24);
  textStyle(BOLD);

  if (mouseIsPressed) {
    fill("#000000");
    text("LIGHT ON", 300, 200);
  } else {
    fill("#ffffff");
    text("LIGHT OFF", 300, 200);
  }
}

