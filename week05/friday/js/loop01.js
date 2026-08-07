function setup(){
    createCanvas(600,400);

}
function draw(){
    background("rgba(130, 117, 117, 0.33)")
    circle(50, 50, 50)
    for (let i = 0; i < 5 ; i++)  {
         circle(50, 50, 50)
    }

    for (let i = 0; i < 10; i++){
        print(i);
    }
}