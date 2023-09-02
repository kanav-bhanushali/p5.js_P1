function preload(){ 
}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,180,120,300,300);
    fill("green")
    rect(60,25,520,10);
    rect(60,445,520,10);
    rect(25,25,10,520);
    rect(605,25,10,520);
    fill("red")
    circle(30,30,60);
    circle(610,30,60);
    circle(30,450,60);
    circle(610,450,60);
    
    
}



function take_snapshot(){
    save('I_M_A_G_E.png');
}
