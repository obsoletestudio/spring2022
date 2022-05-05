let rows = 20;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  noFill();
  strokeWeight(1);
}

function draw() {
  background(255);
  for(let i = 0; i < rows; i++){
    for(let j = 0; j < rows; j++ ){

      let ox = width/(rows*2);
      let oy = height/(rows*2);

      let x = i*width/rows+ox;
      let y = j*height/rows+oy;

      let n = noise(x/10,y/10, frameCount/100);

      let s = width/rows;

      // draw background squares

      stroke(0);

      let d = dist(x,y,width/2,height/2);
      let m = map(d,0,width/2,1,0)
      if(d > width/2){ m = 0; }


      let move = map(m,0,1,0,10);
      let r = random(-1,1);
      let rotation = random(-TWO_PI, TWO_PI)

      push()

      translate(x+move*r,y+move*r)
      rotate(rotation*move/100);
      rect(0,0,s,s);

      pop()



    }
  }

  noLoop();
}
