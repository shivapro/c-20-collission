var frect,mrect





function setup() {
  createCanvas(1200,800);
  frect=createSprite(200, 200, 50, 80);
  frect.shapeColor="green";
  mrect=createSprite(400,200,80,30);
  mrect.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  mrect.x=mouseX;
  mrect.y=mouseY;
  console.log(mrect.x-frect.x);
  if (mrect.x-frect.x<mrect.width/2+frect.width/2 &&
    frect.x-mrect.x<mrect.width/2+frect.width/2&&
    frect.y-mrect.y<mrect.height/2+frect.height/2&&
    mrect.y-frect.y<mrect.height/2+frect.height/2){


    frect.shapeColor="red";
    mrect.shapeColor="red";

  }else {
    frect.shapeColor="green";
    mrect.shapeColor="green";

  }
  drawSprites();
}