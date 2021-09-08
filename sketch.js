
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var wall1, wall2, wall3, wall4;
var stone;




function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  wall1= new Wall(750, 390, 30, 600);
  wall2= new Wall(80, 390, 30, 600);
  wall3= new Wall(415, 75, 700, 30);
  wall4= new Wall(415, 680, 700, 30);

  stone= new Ball(400,400, 20, 20);


}


function draw() 
{
  background(0);

  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  stone.display();

  Engine.update(engine);
  
}

