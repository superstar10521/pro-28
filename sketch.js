
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var mango1, mango2, mango3, mango4, mango5, mango6;
var boy;
var stone;
var chain;
var tree;
var treeImg;
var boyImg;
function preload()
{
  treeImg = loadImage("tree.png")
  boyImg= loadImage("boy.png")
}

function setup() {
	createCanvas(1500, 1000);


	engine = Engine.create();
	world = engine.world;


mango1 = new Mango(1250, 520, 50);
mango2 = new Mango(1090, 560, 50);
mango3 = new Mango(1380, 520, 50);
mango4 = new Mango(1450, 590, 50);
mango5 = new Mango(1250, 450, 50);

ground = new Ground(750, 980, 1500, 40);
stone= new Stone(184, 865, 40);

chain = new Chain(stone.body, {x : 184, y: 865})
	Engine.run(engine);
  
}


function draw() {

  background("lightblue");
 
   text("x :" +mouseX +"y :"+mouseY, mouseX, mouseY )
      
   chain.display();
   drawSprites();
   imageMode(CENTER)
   image(boyImg, 250, 920, 200, 200);
   image(treeImg,1250, 670,400,800);

  
  detectcollision(stone, mango1);
  detectcollision(stone, mango2);
  detectcollision(stone, mango3);
  detectcollision(stone, mango4);
  detectcollision(stone, mango5);
  mango1.display(); 
  mango2.display(); 
  mango3.display(); 
  mango4.display(); 
  mango5.display();  
    
  
  stone.display();
  ground.display();  

}
   
function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  chain.fly();
}

function keyPressed(){
  if(keyCode === 32)
  Matter.Body.setPosition(stone.body, {x:184, y:865})
chain.attach(stone.body)
}

function detectcollision(lstone, lmango){

mangoBodyPosition = lmango.body.position
stoneBodyPosition = lstone.body.position

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
// console.log(distance)
// console.log(lmango.r)
if(distance<=lmango.radius+lstone.radius){
  console.log("pluck")
Matter.Body.setStatic(lmango.body ,false)
}
}


