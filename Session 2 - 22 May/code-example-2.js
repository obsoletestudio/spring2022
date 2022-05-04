// v1n4untitled-1

let rows = 8;

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
      rect(x,y,s,s);

      // select a first random circle position

      let m = map(n,0,1,0,4)

      let r = int(m);

      let move = s / 20;

      switch(r){
        case 0: // go north
          rect(x,y-move,s*0.8, s*0.8)
          rect(x,y-move*2,s*0.6, s*0.6)
          rect(x,y-move*3,s*0.4, s*0.4)
          rect(x,y-move*4,s*0.2, s*0.2)
          rect(x,y-move*5,s*0.1, s*0.1)
        break; // go east
        case 1:
          rect(x+move,y,s*0.8, s*0.8)
          rect(x+move*2,y,s*0.6, s*0.6)
          rect(x+move*3,y,s*0.4, s*0.4)
          rect(x+move*4,y,s*0.2, s*0.2)
          rect(x+move*5,y,s*0.1, s*0.1)
        break;
        case 2: // go south
          rect(x,y+move,s*0.8, s*0.8)
          rect(x,y+move*2,s*0.6, s*0.6)
          rect(x,y+move*3,s*0.4, s*0.4)
          rect(x,y+move*4,s*0.2, s*0.2)
          rect(x,y+move*5,s*0.1, s*0.1)
        break;
        case 3:// go west
          rect(x-move,y,s*0.8, s*0.8)
          rect(x-move*2,y,s*0.6, s*0.6)
          rect(x-move*3,y,s*0.4, s*0.4)
          rect(x-move*4,y,s*0.2, s*0.2)
          rect(x-move*5,y,s*0.1, s*0.1)
        break;
      }
      //circle(x,y,w)

    }
  }

  noLoop();
}
