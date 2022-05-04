let x1, x2, y1, y2;

function setup() {
  createCanvas(400, 400);
  x1 = 0;
  x2 = width;
  y1 = 0;
  y2 = 0;
}

function draw() {
  background("#F8ECD1");
  drawSun();
  drawEnvironment()
}

function drawEnvironment(){
  noStroke();
  fill("#DEB6AB")
  ellipse(0, height-50, width*2.8, height/1.5);
  fill("#AC7D88")
  ellipse(width, height, width*2.8, height/1.5);
  fill("#85586F")
  ellipse(0, height+50, width*3, height/1.5);
}

function drawSun(){
  fill("#FFDCB8")
  circle(mouseX, mouseY, height-mouseY);
  fill("#FFEEBB")
  circle(mouseX, mouseY, height-(mouseY*1.5));
  fill("#FDFFBC")
  circle(mouseX, mouseY, height/2-(mouseY*1.5));
}
