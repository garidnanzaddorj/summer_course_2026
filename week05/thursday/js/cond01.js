function setup(){
    createCanvas(600, 600)
}

function draw (){
    background("#f2f2f2")
    fill ("#1dba76")
    circle (300, 200, 120)
    print (7>6); 
    let a = 7;
    let b = 7;
    print (a>=b);
    print (a < b);
    print (a<= b);
    print ('Hello');
    print (a == b);
    print (a===b);
    print (2== '2');
    print (2=== '2');
    print (mouseX);
    if (mouseX>300)
        fill("#b3293b")
        circle(300, 200, 120)
}