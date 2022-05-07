function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#F8ECD1");

  drawSun();
  drawEnvironment();
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
  fill("#FFEEBB")
  circle(mouseX, mouseY, mouseY *2 + 50);
  fill("#FDFFBC")
  circle(mouseX, mouseY, mouseY *0.5 + 50);
}
