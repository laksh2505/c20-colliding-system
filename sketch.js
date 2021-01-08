var movingrect,fixedrect


function setup() {
  createCanvas(800,400);
  movingrect = createSprite(200, 200, 80, 50);
  fixedrect = createSprite(100,200,50,80);
  movingrect.shapeColor = "purple";
  fixedrect.shapeColor = "purple";
}

function draw() {
  background("yellow");
  movingrect.x = mouseX;
  movingrect.y = mouseY;

  if(movingrect.x-fixedrect.x < movingrect.width/2+fixedrect.width/2 &&
    fixedrect.x - movingrect.x < movingrect.width/2+fixedrect.width/2 && 
    fixedrect.y - movingrect.y < movingrect.height/2+fixedrect.height/2 &&
    movingrect.y - fixedrect.y < movingrect.height/2+fixedrect.height/2) {
    movingrect.shapeColor = "red";
  fixedrect.shapeColor = "red";
  }
  else{
    movingrect.shapeColor = "purple";
  fixedrect.shapeColor = "purple";
  }
  drawSprites();
}