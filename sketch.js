function setup() {
  createCanvas(600, 600);
  background("darkmagenta");
}

function draw() {
  
  stroke("white");
  fill("darkblue");
  
  if(mouseIsPressed){
    circle(mouseX,mouseY,200);
  }
}