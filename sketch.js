var fixedRect, movingRect;

var rect1,rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1=createSprite(20,20,100,50);

  fixedRect.velocityY=-3;
  rect2=createSprite(600,100,70,30);
  rect2.velocityY=3;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  //isTouching(movingRect,fixedRect);

  if(isTouching(movingRect,rect1)){
    movingRect.shapeColor = "red";
    rect1.shapeColor = "red";
  }
  else if(isTouching(movingRect,rect2)){
    movingRect.shapeColor="red"
    rect2.shapeColor="red"
  }else if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="red"
    fixedRect.shapeColor="red"
  }
  else
  {
    movingRect.shapeColor = "green";
    rect1.shapeColor = "green";
    rect2.shapeColor="green";
    fixedRect.shapeColor="green"
  }

  bounceOff(fixedRect,rect2);

  //isTouching(rect1,fixedRect);
  
  drawSprites();
}

