
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree=new Tree(600,470)
	ground=new Ground(400,670,800,20)
	boy=new Boy(150,600,80,200)
	stone=new Stone(120,510,20,20)

	m1=new Mango(620,300)
	m2=new Mango(640,330)
	m3=new Mango(600,360)
	m4=new Mango(580,390)
	m5=new Mango(600,420)
	m6=new Mango(630,380)

	chain=new Chain(boy.body,stone.body);
	
	


	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("lightblue");

  detectcollision(stone,m1)  ;
  detectcollision(stone,m2) ;
  detectcollision(stone,m3);
  detectcollision(stone,m4);
  detectcollision(stone,m5);

  keypressed();

  tree.display();
  ground.display();
  stone.display();
  boy.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  
  
  drawSprites();
 
}

function mouseDragged()
 {
    Matter.Body.setPosition(stone.body, {x:mouseX,y:mouseY});
    
}
function mouseReleased()
{
    chain.fly();
}

function detectcollision(lstone,lmango){

	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
   
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)


	if(distance<-lmango.r+lstone.r)
	{
      Matter.Body.setStatic(lmango.body,false);
	}

	
}

function keypressed()
	{
	   if(keyCode===32)
	   {
         Matter.Body.setPosition(stone.body,{x:120,y:510})
	   }
	}