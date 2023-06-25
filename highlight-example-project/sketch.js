let noiseVal;
//Increment x by 0.01
let x_increment = 0.01;
//Increment z by 0.02 every draw() cycle
let z_increment = 0.02;

//Offset values
let z_off, y_off, x_off;

function setup() {
  //Create the Canvas
  createCanvas(128, 128);
  //Define frame rate
  frameRate(4);
  //Initial value of z_off
  z_off = 0;
  noiseSeed(hl.random(1000));
}

function draw() {
  x_off = 0;
  y_off = 0;
  //Make the background black
  background(0);
  //Adjust the noice detail
  noiseDetail(3.5, 0.6);

  //For each x,y calculate noice value
  for (let y = 0; y < height; y++) {
    x_off += x_increment;
    y_off = 0;

    for (let x = 0; x < width; x++) {
      //Calculate and Draw each pixel
      noiseVal = noise(x_off, y_off, z_off);
      colorMode(HSB, 100,100,100)
      stroke(noiseVal * 100,100,100);
      y_off += x_increment;
      point(x, y);
    }
  }

  z_off += z_increment;
}
