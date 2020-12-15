
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bobDiameter = 40

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	b1 = new Bob(220,300,25)
	b2 = new Bob(290,300,25)
	b3 = new Bob(300,300,25)
	b4 = new Bob(430,300,25)
	b5 = new Bob(200,300,25)
	r1 = new Roof(350,100,400,20)
	c1 = new Chain(b1.body,r1.body,-(bobDiameter*2),0)
	c2 = new Chain(b2.body, r1.body, -bobDiameter,0)
	c3 = new Chain(b3.body, r1.body,0,0)
	c4 = new Chain(b4.body, r1.body, bobDiameter,0)
	c5 = new Chain(b5.body, r1.body, bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
 
  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()
  r1.display()
  c1.display()
  c2.display()
  c3.display()
  c4.display()
  c5.display()
  
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(b1.body,b1.body.position,{x:-105,y:105})
	}
}


