const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var stand1, stand2;

var stringshot;

var starr;

var score;

var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16;




function setup() {

  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  b1 = new Block(475, 350, 50, 50);
  b2 = new Block(485, 350, 50, 50);
  b3 = new Block(495, 350, 50, 50);
  b4 = new Block(500, 350, 50, 50);
  b5 = new Block(510, 350, 50, 50);
  b6 = new Block(520, 350, 50, 50);
  b7 = new Block(530, 350, 50, 50);

  b8 = new Block(480, 325, 50, 50);
  b9 = new Block(490, 325, 50, 50);
  b10 = new Block(500, 325, 50, 50);
  b11 = new Block(510, 325, 50, 50);
  b11 = new Block(520, 325, 50, 50);

  b12 = new Block(480, 300, 50, 50);

  b13 = new Block(495, 300, 50, 50);
  b14 = new Block(510, 300, 50, 50);
  b15 = new Block(520, 300, 50, 50);

  b16 = new Block(500, 275, 50, 50);
  
  starr = new Star(100, 200, 50, 50);

  stringshot = new SlingShot(starr.body, {x: 150, y: 200});

  stand1 = new Ground(500, 400, 400, 25);


  score = 0;  


}

function draw() {
  Engine.update(engine);
  background("white"); 

  
  
  stand1.display();

  b1.display();
  b2.display();
  b3.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();

  b1.score();
  b2.score();
  b3.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();
  b8.score();
  b9.score();
  b10.score();
  b11.score();
  b12.score();
  b13.score();
  b14.score();
  b15.score();
  b16.score();

  
  
  stringshot.display();


  starr.display();
  drawSprites();

  fill("black");
  text("Score:" + score, 350, 100);

}


function mouseDragged(){
  
      Matter.Body.setPosition(starr.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  stringshot.fly();
  
}

function keyPressed(){
  if(keyCode === 32){
      
      
      Matter.Body.setPosition(starr.body, {x: 200, y:50});
      stringshot.attach(starr.body);

  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
    background("yellow"); 
  }
  else{
    background("purple"); 
  }
  
}