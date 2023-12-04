/* Isabel Bohan
 * 2023-12-5
 */

let flowers = [];

function setup() {
  createCanvas(400, 400);
  
  // Create 20 flowers
  for(let i = 0; i < 20; i++){
    flowers.push(new Flower());  
  }
}

function draw() {
  background(220);
  
  // Display and move each flower
  for(let flower of flowers){
    flower.display();
    flower.move();
  }
}

// Flower class
class Flower {
  
  constructor(){
    // Random x,y position
    this.x = random(0, width);
    this.y = random(0, height);
    // Size from 50-100
    this.size = random(50, 100);
    // Random movement speed
    this.speed = random(1, 3);
  }
  
  // Draw flower
  display(){
    push();
    translate(this.x, this.y);
    noStroke();
    fill('pink');
    ellipse(0, 0, this.size);
    pop();
  }
  
  // Move flower randomly
  move(){ 
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }
  
}

  // Flower center
  fill(255, 0, 0); // Red color
  ellipse(200, 150, 15, 15);
}
