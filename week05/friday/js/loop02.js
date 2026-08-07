function setup() {
  createCanvas(500, 250);

  background(200);

  line(30, 0, 30, 100);

}
function draw(){
  stroke("#222222");
  strokeWeight(3);

  for (let i = 0; i < 10; i++){
    let x = 50 + i * 55;
    line (x, 50, x, 80)
  }
  for (let i = 0; i < 10; i++){
    let x = 50 + i* 55;
    line(x, 100, x, 130);
  }
  for (let i = 0; i < 10; i++){
    let x = 50 + i * 55;
    line(x, 150, x, 180);
  }
}