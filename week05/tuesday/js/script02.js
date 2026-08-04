
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


function setStroke() {
  ctx.strokeStyle = "#1A1423";
  ctx.lineWidth = 4;
}


function drawMountain(startX, startY, peakX, peakY, endX, endY) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(peakX, peakY);
  ctx.lineTo(endX, endY);
  ctx.closePath();
  ctx.fillStyle = "#9B5DE5";
  ctx.fill();
  setStroke();
  ctx.stroke();
}


function drawCloud(x, y, scale = 1) {
  ctx.fillStyle = "#F8F9FA";
  setStroke();

  const circles = [
    { x: 0, y: 0, r: 25 },
    { x: 25, y: -10, r: 30 },
    { x: 55, y: 0, r: 25 },
    { x: 25, y: 15, r: 20 }
  ];

  circles.forEach(c => {
    ctx.beginPath();
    ctx.arc(x + c.x * scale, y + c.y * scale, c.r * scale, 0, Math.PI * 2);
    ctx.fill();
  });

  circles.forEach(c => {
    ctx.beginPath();
    ctx.arc(x + c.x * scale, y + c.y * scale, c.r * scale, 0, Math.PI * 2);
    ctx.stroke();
  });
}


function drawHill(startX, startY, cpX, cpY, endX, endY, color) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.quadraticCurveTo(cpX, cpY, endX, endY);
  ctx.lineTo(canvas.width, canvas.height);
  ctx.lineTo(0, canvas.height);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
  setStroke();
  ctx.stroke();
}


function drawTree(x, y) {
  ctx.fillStyle = "#A75A2A";
  ctx.fillRect(x - 8, y, 16, 45);
  setStroke();
  ctx.strokeRect(x - 8, y, 16, 45);

  ctx.beginPath();
  ctx.arc(x, y - 10, 32, 0, Math.PI * 2);
  ctx.fillStyle = "#558200";
  ctx.fill();
  ctx.stroke();
}


function drawBush(x, y, w, h) {
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, 15);
  ctx.fillStyle = "#70A401";
  ctx.fill();
  setStroke();
  ctx.stroke();
}

ctx.fillStyle = "#BDE0FE";
ctx.fillRect(0, 0, canvas.width, canvas.height);


ctx.beginPath();
ctx.arc(600, 100, 45, 0, Math.PI * 2);
ctx.fillStyle = "#FFD166";
ctx.fill();
setStroke();
ctx.stroke();


drawMountain(180, 400, 250, 200, 320, 400);
drawMountain(280, 400, 370, 160, 470, 400);
drawMountain(430, 400, 500, 220, 580, 400);


drawCloud(170, 120, 0.9);
drawCloud(320, 180, 0.6);
drawCloud(450, 110, 1.1);


drawHill(100, 320, 250, 260, 450, 330, "#80B918");
drawHill(300, 330, 500, 270, 700, 330, "#70A401");


drawTree(160, 300);
drawTree(200, 315);
drawTree(550, 300);
drawTree(590, 290);


ctx.beginPath();
ctx.rect(130, 320, 540, 40);
ctx.fillStyle = "#AACC00";
ctx.fill();
setStroke();
ctx.stroke();

drawBush(200, 310, 120, 25);
drawBush(390, 310, 120, 25);