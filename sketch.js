
var bg, backgroundImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  Ironmanimages = loadImage("images/iron.png");
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
 bg.addImage(backgroundImg);
 bg.scale =2;
 Ironman = createSprite(100,500,40,40);
 Ironman.addImage(Ironmanimages);
 Ironman.scale = 0.3;
 ground = createSprite(200,585,400,10);
 ground.visible = false;
}

function draw() {
  if(keyDown("space")) {
    Ironman.velocityY = -15;
  }
  Ironman.velocityY = Ironman.velocityY + 0.5;
  Ironman.collide(ground);
 
    
    drawSprites();
   
}

