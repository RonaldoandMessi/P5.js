function setup() {
    canvas = createCanvas(600,550);
    video = createCapture(VIDEO);
video.hide();
}
  
  function draw() {
    background(255,255,255);
    fill('red');
    stroke('red');
    rect(530,50,40,480);
    rect(50,490,500,40);
    rect(50,30,490,40);
    rect(27,50,40,480);
    noFill();
     fill('#03A9F4');
    stroke('#03A9F4');
    circle(46,46,90);
    circle(554,46,90);
    circle(554,505,90);
    circle(46,505,90);
    image(video,100,130,400,300);
    }

function take_snapshot(){
    save("ME.png");
}

