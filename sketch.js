/* Isabel Bohan
 * 2023-12-5
 */

function draw() {
   background(220);

   // Draw the stem
   fill(50, 100, 0);
   rect(200, 250, 10, 100);
   // Stem
   fill(34, 139, 34); // Green color
   rect(195, 200, 10, 100);

   // Draw the petals
   fill(255, 100, 0);
   for (let i = 0; i < 10; i++) {
     ellipse(200, 200, 50, 30);
     rotate(PI / 5);
   // Flower head
   fill(255, 165, 0); // Orange color
   ellipse(200, 150, 60, 60);

   // Petals
   fill(255, 255, 0); // Yellow color

   // Draw petals using a loop
   for (let i = 0; i < 6; i++) {
     let angle = map(i, 0, 6, 0, TWO_PI); // Distribute petals evenly around the flower
     let petalX = 200 + 20 * cos(angle);
     let petalY = 150 + 20 * sin(angle);
     ellipse(petalX, petalY, 20, 40);
   }

   // Draw the center
   fill(255, 255, 0);
   ellipse(200, 200, 20, 20);
   // Flower center
   fill(255, 0, 0); // Red color
   ellipse(200, 150, 15, 15);
 }

  // Flower center
  fill(255, 0, 0); // Red color
  ellipse(200, 150, 15, 15);
}
