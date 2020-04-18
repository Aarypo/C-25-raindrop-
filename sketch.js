const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var rain;
var rand;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  rand = randomNumber(0,800);
  rain = new Raindrop(rand,rand,10,20);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(0); 
  rain.display(); 
  drawSprites();
}