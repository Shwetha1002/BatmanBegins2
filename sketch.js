const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


var drop = []
var umbrella;
var maxDrops = 100;
var thunder;
var thunder1;
var thunder2;
var rand;
var thunder2;

function preload(){
    thunder1 = loadImage("2.png");
    thunder2 = loadImage("3.png");
    thunder3 = loadImage("4.png");
}

function setup(){
 createCanvas(800,1000);
 engine = Engine.create();
	world = engine.world;
    //drop = new Drops(200,10, 10)
    umbrella = new Umbrella(250, 650, 100);
   
    
    
   if(frameCount % 550 === 0){
    for(var i = 0; i < maxDrops; i++){
        drop.push(new Drops(random(0,800), random(0,400), 5))
    }
}
}
    


function draw(){
background("navy")
    Engine.run(engine);
    //drop.display();
     
    for (var f = 0; f < maxDrops; f++) {
        drop[f].display();
        drop[f].update();
        
      }
rand = Math.round(random(1,3))
if(frameCount % 20 === 0){
    thunder = createSprite( random(20, 700),random(10,50), 50,50);
    thunder.scale = 0.5;
      switch(rand){
    
        case 1: thunder.addImage("t1",thunder1);
        break;
        case 2: thunder.addImage("t2",thunder2);
        break;
        case 3: thunder.addImage("t3",thunder3);
        break;
        
    }
}

if (frameCount % 35 === 0){
    thunder.destroy();
}
    umbrella.display();
    drawSprites();
    
    
    
    
}   

