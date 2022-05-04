//Zdeněk Sýkora1965

let rows = 8;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(220);
  for(let i = 0; i < rows; i++){
    for(let j = 0; j < rows; j++ ){

      let ox = width/(rows*2);
      let oy = height/(rows*2);

      let x = i*width/rows+ox;
      let y = j*height/rows+oy;

      let n = noise(x/10,y/10, frameCount/100);

      let w = width/rows;
      let h = height/rows;

      // draw background squares

      if(int(n*10) % 2 == 0){
        fill(0);
        rect(x,y,w,h);
        fill(255);
      }
      else{
        fill(255);
        rect(x,y,w,h);
        fill(0);
      }


      // select a first random circle position

      let m = map(n,0,1,0,4)

      let r = int(m);

      switch(r){
        case 0: // north
          arc(x,y-oy,w,h,0, PI)
        break; // east
        case 1:
          arc(x+ox,y,w,h,PI/2, 3*PI/2)
        break;
        case 2: // south
          arc(x,y+oy,w,h,3*PI/2, -PI/2)
        break;
        case 3:// west
          arc(x-ox,y,w,h,-PI/2, PI/2)
        break;
      }
      //circle(x,y,w)

    }
  }

  //noLoop();
}
