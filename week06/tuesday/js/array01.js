let ball = {
    x: 200,
    y : 200,
 
    speed: 3
}
console.log(ball.x);
console.log(ball.y);
console.log(ball.size);
console.log(ball.color);
console.log(ball.speed); 

function setup(){
    createCanvas(600,600);

}
function draw (){
        background("#45f")
        fill(ball.color);
        
}        