/* Isabel Bohan
 * 2023-12-5
 */


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  // Draw tree
  fill(34, 139, 34); // Green color
  triangle(200, 100, 100, 300, 300, 300);

  // Draw trunk
  fill(139, 69, 19); // Brown color
  rect(175, 300, 50, 100);

  // Draw ornaments
  drawOrnament(200, 200);
  drawOrnament(150, 250);
  drawOrnament(250, 250);
  drawOrnament(180, 180);
  drawOrnament(220, 180);
  drawOrnament(200, 120);

  
}

function drawOrnament(x, y) {
  fill(random(250), random(250), random(250)); // Random color
  ellipse(x, y, 10, 10); // Ornament shape
}
