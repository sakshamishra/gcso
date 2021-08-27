var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  car = createSprite(200, 200, 50, 50);
  wall1 = createSprite(1200,200,60,100);

    car.velocityX = 5;

  speed=random(55,90);
  weight=random(400,1500);

}

function draw() {
  background("black");  
  
  
  if(wall1.x - car.x  < (car.width+wall1.width)/2)
 {
   car.velocityX=0;
   var deformation=0.5 * weight * speed* speed/22509;
   if(deformation>180)
   {
     car.shapeColor=color("red");
  
   }
   if(deformation<180 && deformation>100)
   {
     car.shapeColor=color("yellow");
  
   }
    if(deformation<100)
    {
     car.shapeColor=color("green");

    }
  }
 
  drawSprites();

}
