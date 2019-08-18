let yoff = 0.0; // 2nd dimension of perlin noise

function setup() {
  createCanvas(710, 400);
}

function draw() {
  background(255); 
  let xoff = yoff;
  xoff = drawWave(-240, 148, 194, 214, xoff);
  xoff = drawWave(-210, 148, 214, 207, xoff);
  xoff = drawWave(-180, 148, 203, 214, xoff);
  xoff = drawWave(-150, 148, 194, 214, xoff);
  xoff = drawWave(-120, 148, 170, 214, xoff);
  xoff = drawWave(-90, 148, 214, 207, xoff);
  xoff = drawWave(-60, 255, 255, 255, xoff);
  xoff = drawWave(-30, 148, 203, 214, xoff);
  xoff = drawWave(0, 148, 214, 207, xoff);
  xoff = drawWave(30, 148, 194, 214, xoff);
  xoff = drawWave(60, 148, 170, 214, xoff);
  xoff = drawWave(90, 148, 203, 214, xoff);
}

function drawWave(yheight, r, g, b, xoff) {
  
  
  beginShape();
  fill(r, g, b, 50);
  strokeWeight(0);

  // Iterate over horizontal pixels
  for (let x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to

    // Option #1: 2D Noise
    let y = map(noise(xoff, yoff), 0, 1, 200, 300);

    // Set the vertex
    vertex(x, y + yheight);
    // Increment x dimension for noise
    xoff += 0.02;
  }
  // increment y dimension for noise
  yoff += 0.0003;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
  return xoff;
}
