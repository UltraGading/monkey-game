var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var survivalTime

function preload(){
monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
bananaImage = loadImage("banana.png");
obstacleImage = loadImage("obstacle.png");
}

function setup() {
monkey = createSprite(80,315,20,20)
monkey.addAnimation('moving', monkey_running)
monkey.scale = 0.1
ground = createSprite(400,350,900,10)
ground.velocityX = -4;
FoodGroup = new Group();
obstacleGroup = new Group()
}

function draw() {
background('white')
food();
rocks();
ground.velocityX = -4;
ground.x=ground.width/2
monkey.collide(ground)
if(keyDown('space')&& monkey.y>=200){
monkey.velocityY = -13;
}
monkey.velocityY = monkey.velocityY + 0.7;
drawSprites();
}

function food(){
if(World.frameCount%80 == 0){
banana = createSprite(200,160,10,10)
banana.addImage(bananaImage)
banana.scale = 0.1
banana.y = Math.round(random(120,200))
banana.velocityX = -4;
banana.lifetime = 50;
FoodGroup.add(banana)
}
}

function rocks(){
if(World.frameCount%300 == 0){
obstacle = createSprite(200,320,20,20)
obstacle.addImage(obstacleImage)
obstacle.scale = 0.15
obstacle.velocityX = -4;
obstacle.lifetime = 100;
obstacleGroup.add(obstacle)
}
}