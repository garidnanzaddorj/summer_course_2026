
const artPlan = {
  title: "Cosmic Flow",
  background: "#0b090a",
  palette: ["#e0aaff", "#c77dff", "#7b2cbf"],
  shape: "circle", 
  count: 20,
  speed: 2,
  minSize: 15,
  maxSize: 55,
  direction: "both"
};

let particles = [];

function setup() {
  createCanvas(600, 400);
  buildScene(artPlan);
}

function draw() {
  background(artPlan.background);

  for (let p of particles) {
    updateParticle(p);
    drawParticle(p, artPlan.shape);
  }
}

function buildScene(plan) {
  particles = [];

  for (let i = 0; i < plan.count; i++) {
    let vxVal = 0;
    let vyVal = 0;

    if (plan.direction === "horizontal") {
      vxVal = random(-plan.speed, plan.speed);
    } else if (plan.direction === "vertical") {
      vyVal = random(-plan.speed, plan.speed);
    } else {
      vxVal = random(-plan.speed, plan.speed);
      vyVal = random(-plan.speed, plan.speed);
    }

    particles.push({
      x: random(width),
      y: random(height),
      size: random(plan.minSize, plan.maxSize),
      vx: vxVal,
      vy: vyVal,
      color: random(plan.palette)
    });
  }
}

function updateParticle(p) {
  p.x += p.vx;
  p.y += p.vy;

  if (p.x < 0 || p.x > width) p.vx *= -1;
  if (p.y < 0 || p.y > height) p.vy *= -1;
}

function drawParticle(p, shape) {
  noStroke();
  fill(p.color);

  if (shape === "square") {
    rectMode(CENTER);
    square(p.x, p.y, p.size);
  } else if (shape === "triangle") {
    let r = p.size / 2;
    triangle(
      p.x, p.y - r,
      p.x - r, p.y + r,
      p.x + r, p.y + r
    );
  } else {

    circle(p.x, p.y, p.size);
  }
}

function mousePressed() {

  artPlan.count = floor(random(10, 30));
  buildScene(artPlan);
}