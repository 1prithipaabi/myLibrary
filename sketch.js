var moving_rect, fixed_rect;
var go1, go2, go3, go4;

function setup() {
  createCanvas(800,400);
  fixed_rect = createSprite(200,200,50,80);
  fixed_rect.shapeColor = "green";
  moving_rect = createSprite(400,200,80,30);
  moving_rect.shapeColor = "green";
  go1 = createSprite(100,200,40,30);
  go1.shapeColor = "blue";
  go2 = createSprite(400,50,40,30);
  go2.shapeColor = "pink";
  go3 = createSprite(200,40,40,30);
  go3.shapeColor = "purple";
  go4 = createSprite(300,100,40,30);
  go4.shapeColor = "orange";
  moving_rect.velocityY = -5;
  fixed_rect.velocityY = 5;
  moving_rect.velocityX = -5;
  fixed_rect.velocityX = 5;
}

function draw() {
  background(255,255,255); 
  moving_rect.x = World.mouseX; 
  moving_rect.y = World.mouseY;
  if(isTouching(moving_rect,go2)){
    moving_rect.shapeColor = "red";
    go2.shapeColor = "red";
  }
  else{
    moving_rect.shapeColor = "green";
    go2.shapeColor = "green";
  }
  bounceOff(moving_rect,fixed_rect);
  drawSprites();
}

