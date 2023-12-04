/* Isabel Bohan
 * 2023-12-5
 */


let angleX = 0;
let angleY = 0;
let side = 100;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(200);

  rotateX(angleX);
  rotateY(angleY);

  // Draw the cube
  drawCube();

  // Increment angles for rotation
  angleX += 0.01;
  angleY += 0.01;
}

function drawCube() {
  // Draw front face
  beginShape();
  fill(255, 0, 0);
  stroke(0);
  strokeWeight(2);
  vertex(-side / 2, -side / 2, side / 2);
  vertex(side / 2, -side / 2, side / 2);
  vertex(side / 2, side / 2, side / 2);
  vertex(-side / 2, side / 2, side / 2);
  endShape(CLOSE);

  // Draw back face
  beginShape();
  fill(0, 0, 255);
  stroke(0);
  strokeWeight(2);
  vertex(-side / 2, -side / 2, -side / 2);
  vertex(side / 2, -side / 2, -side / 2);
  vertex(side / 2, side / 2, -side / 2);
  vertex(-side / 2, side / 2, -side / 2);
  endShape(CLOSE);

  // Connect front and back faces
  beginShape();
  fill(0, 255, 0);
  stroke(0);
  strokeWeight(2);
  vertex(-side / 2, -side / 2, side / 2);
  vertex(-side / 2, -side / 2, -side / 2);
  vertex(side / 2, -side / 2, -side / 2);
  vertex(side / 2, -side / 2, side / 2);
  endShape(CLOSE);

  beginShape();
  fill(255, 255, 0);
  stroke(0);
  strokeWeight(2);
  vertex(-side / 2, side / 2, side / 2);
  vertex(-side / 2, side / 2, -side / 2);
  vertex(side / 2, side / 2, -side / 2);
  vertex(side / 2, side / 2, side / 2);
  endShape(CLOSE);

  beginShape();
  fill(255, 0, 255);
  stroke(0);
  strokeWeight(2);
  vertex(-side / 2, -side / 2, side / 2);
  vertex(-side / 2, side / 2, side / 2);
  vertex(-side / 2, side / 2, -side / 2);
  vertex(-side / 2, -side / 2, -side / 2);
  endShape(CLOSE);

  beginShape();
  fill(0, 255, 255);
  stroke(0);
  strokeWeight(2);
  vertex(side / 2, -side / 2, side / 2);
  vertex(side / 2, side / 2, side / 2);
  vertex(side / 2, side / 2, -side / 2);
  vertex(side / 2, -side / 2, -side / 2);
  endShape(CLOSE);
}
