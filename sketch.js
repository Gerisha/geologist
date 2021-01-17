
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ham;
var ground;
var stony;
var rub;
var ball,ball1,ball2,ball3,ball4,ball5,ball6;
var box;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ham=new Hammer(200,200,200,70);
ground=new Plane(600,height,1500,20)
stony=new Stone(500,100,100,50)
rub=new Rubber(700,100,50)
ball= new Sand(300,100,50)
ball1= new Sand(400,100,50)
ball2= new Sand(100,100,50)
ball3= new Sand(600,100,50)
ball4= new Sand(750,100,50)
ball5= new Sand(800,100,50)
ball6= new Sand(1000,100,50)
box=new Iron(400,400,50,30)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  ham.display();
  ground.display();
  stony.display();
  rub.display();
  ball.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  box.display();
  drawSprites();
 
}



