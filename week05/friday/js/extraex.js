const canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

const rows = 5;
const cols = 5;
const cellWidth = canvas.width / cols;
const cellHeight = canvas.height / rows;
const radius = cellWidth * 0.35;

const topLeft = [0, 0, 150];
const topRight = [80, 200, 150];
const bottomLeft = [200, 30, 140];
const bottomRight = [210, 205, 160];

function lerp(start, end, amt) {
  return start + (end - start) * amt;
}

for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    const u = c / (cols - 1);
    const v = r / (rows - 1);

    const topR = lerp(topLeft[0], topRight[0], u);
    const topG = lerp(topLeft[1], topRight[1], u);
    const topB = lerp(topLeft[2], topRight[2], u);

    const bottomR = lerp(bottomLeft[0], bottomRight[0], u);
    const bottomG = lerp(bottomLeft[1], bottomRight[1], u);
    const bottomB = lerp(bottomLeft[2], bottomRight[2], u);

    const red = Math.round(lerp(topR, bottomR, v));
    const green = Math.round(lerp(topG, bottomG, v));
    const blue = Math.round(lerp(topB, bottomB, v));

    const x = c * cellWidth + cellWidth / 2;
    const y = r * cellHeight + cellHeight / 2;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000000';
    ctx.stroke();
  }
}