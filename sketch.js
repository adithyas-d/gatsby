
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
   monkey=createSprite(80,315,20,20);
   monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.2
  
  ground=createSprite(400,380,1000000,1)
  ground.velocityX=-4
  ground.x=ground.width/2
  ground.velocityX = -(4 +  score/100)

 

}


function draw() {
   
  background("white")
  ground.velocityX=-5 
  if(frameCount%80===0){
   banana=createSprite(200,200,30,20)
   banana.addImage("banana.png",bananaImage)
   banana.scale=0.1
   banana.y= Math.round(random(10,300));
  banana.x= Math.round(random(10,600));
    banana.velocityX=-4
  
  }
  
  
   if(frameCount%300===0){
obstacles=createSprite(400,380,100,30)  
     obstacles.addImage("obstacle.png",obstacleImage)
     obstacles.scale=0.2
     obstacles.velocityX=-4
  }

  if(keyDown("space")){
    monkey.velocityY = -12 

    
  }
  
      monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground)
  
 
  drawSprites();
  
}






