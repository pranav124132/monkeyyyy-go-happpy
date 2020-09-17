
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  score = 0;
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  foodGroup = new Group();
 obstacleGroup = new Group();
}



function setup() {

  monkey = createSprite(20,575,30,30);
  monkey.addAnimation("monkeyyrun",monkey_running);
    monkey.scale = 0.1
    ground = createSprite(20,580,1200,20);
  ground.velocityX = -10;
  monkey.velocityX = 0.1;
}


function draw() {
    createCanvas(600,600);
  background("white")
  
  text(score,560,40)
       
   if (ground.x >0){
      ground.x = ground.width/2;
    }
  
  if (monkey.x >0) {
    monkey.x = 300
  }
  
  monkey.bounceOff(obstacleGroup)
  
    monkey.velocityY = monkey.velocityY + 0.1
  if (keyDown("space")) {
    monkey.velocityY = -5;
  }
  
  if (foodGroup.isTouching(monkey)){
    score = score+1
  }
  
  
monkey.collide(ground);
  obstacles();
  bananas();
  drawSprites();
}

 function bananas() {
   if (frameCount % 80 === 0){
     banana = createSprite(400,Math.round(random(560,420)),20,20)
     banana.addImage("ban",bananaImage)
     banana.scale = 0.1
     banana.lifetime = 220;
     banana.velocityX = -1
    foodGroup.add(banana);
   }
 }

 function obstacles() {
   if (frameCount % 300 === 0){
     obstacle = createSprite(Math.round(random(120,600)),560,20,20)
     obstacle.addImage("rock",obstacleImage)
     obstacle.scale = 0.1
     obstacle.lifetime = 220;
     obstacle.velocityX = -2;
     obstacleGroup.add(obstacle);
   }
 }




