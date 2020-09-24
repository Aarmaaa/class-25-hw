var b;

var bin,bin2,bin3

var ground;

var bim

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload(){

bim=loadImage("dustbingreen.png")

}




function setup() {
	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;


	ground = Bodies.rectangle(400,650,800,20)
	World.add(world,ground)
	ground.isStatic= true

	

	//Create the Bodies Here.
	b=new Paper(50,200,20,20)

	bin=new Bi(650,500,100,100)
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  rect(400,650,800,20)  


  b.displace();			
  bin.displace();
 
 
   drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(b.body,b.body.position,{x:0.015,y:-0.020})
	}


}
