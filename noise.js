let xs = []
let ys = []
let x = 0;
let y = 300;
let a = 2;
let delta = 1;
let points = 0;
let avg = 0.0;
let timer = 0;
let should_change = false;


// Change these options to see what happens
let freq = 50; // percenttage
let grad = 50; // gradiant percentage
let cons = 1; // constant percentage
let gap = 20; // time of changing

function setup() {
  createCanvas(600, 600);

  stroke(200);
  frameRate(60);
}

function draw() {
  background(0);

  if (x < width) {
    avg *= points;
    points++;
    xs[x / 2] = x;
    ys[x / 2] = y;
    avg += y;
    avg /= points;
    if (should_change == false && random(100) < freq) {
      should_change = true;
    }
    if (should_change) {
      a = random(300 - avg - grad / 100, 300 - avg + grad / 100);
      timer += 1;
      if (timer > gap) {
        should_change = false;
        timer = 0;
      }
    } else {
      a = random(-cons / 100, cons / 100)
    }

    y = y + a;
    x = x + delta;
  }

  for (i = 0; i < xs.length - 1; i++) {
    line(xs[i], ys[i], xs[i + 1], ys[i + 1]);
  }
}
