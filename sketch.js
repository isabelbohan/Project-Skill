/* Isabel Bohan
 * 2023-12-5
 */

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Draw the stem
  fill(50, 100, 0);
  rect(200, 250, 10, 100);

  // Draw the petals
  fill(255, 100, 0);
  for (let i = 0; i < 10; i++) {
    ellipse(200, 200, 50, 30);
    rotate(PI / 5);
  }

  // Draw the center
  fill(255, 255, 0);
  ellipse(200, 200, 20, 20);
}
