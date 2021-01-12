var fixedRect,movingRect
var fixedRect2,fixedRect3

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(600,300,50,80)
  fixedRect2 = createSprite(300,150,50,80)
  fixedRect3 = createSprite(200,200,50,80)
  fixedRect.velocityX = 3 ;
  
}

function draw(){
  background("red");  

movingRect.shapeColor = "yellow"

  movingRect.x=mouseX
  movingRect.y = mouseY

 if (isTouching(fixedRect,movingRect)){
   movingRect.shapeColor = "green"
   fixedRect.shapeColor = "green"
  }
  else {
   // movingRect.shapeColor = "yellow"
    fixedRect.shapeColor = "blue"
   }


   if (isTouching(fixedRect2,movingRect)){
    movingRect.shapeColor = "green"
    fixedRect2.shapeColor = "green"
   }
   else {
    // movingRect.shapeColor = "yellow"
     fixedRect2.shapeColor = "purple"
    }
   

    if (isTouching(fixedRect3,movingRect)){
      movingRect.shapeColor = "green"
      fixedRect3.shapeColor = "green"
     }
     else {
     //  movingRect.shapeColor = "yellow"
       fixedRect3.shapeColor = "orange"
      }

    bounceOff (fixedRect,fixedRect3);
    bounceOff (fixedRect,movingRect);

  drawSprites();
}



