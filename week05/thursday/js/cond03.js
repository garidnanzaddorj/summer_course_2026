function setup (){
    createCanvas(600, 400);
}
function draw (){
    if (mouseX>width / 2){
        backgorund("#3498db");

    }
    else {
        backgorund("#3ce77bff")
    }
    fill ("#fff")
    circle (mouseX, mouseY, 30);
}