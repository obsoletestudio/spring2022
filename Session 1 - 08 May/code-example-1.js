function setup() {
  createCanvas(400, 400);
}

function draw() {

  // change rectangle drawing mode from CORNER (default) to CENTER
  // https://p5js.org/reference/#/p5/rectMode
  rectMode(CENTER);

  // change degault stroke weight from 1 (default) to 5 pixels.
  // https://p5js.org/reference/#/p5/strokeWeight
  strokeWeight(5);

  // Left Side : Black Background

  noStroke();
  fill('black')
  rect(width/4,height/2,width/2,height);

  // Left Side : White Square

  stroke('white')
  noFill();
  rect(width/4, height/2,mouseX,mouseX);

  // Right Side : White Background

  noStroke();
  fill('white')
  rect(3*width/4,height/2,width/2,height);

  // Right Side : Black Circle

  stroke('black')
  noFill();
  ellipse(3*width/4,height/2,mouseX, mouseX);

}
