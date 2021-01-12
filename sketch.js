const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg,bg_img;

function preload() {
    bg_img = loadImage("bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    //Ground Class
    ground = new Ground(600,380,1200,25);
    Stand1 = new Ground(550, 300, 300, 15);
    Stand2 = new Ground(1000, 150, 250, 15);

    //Block
    b1=new Block(460,260);
    b2=new Block(490,260);
    b3=new Block(520,260);
    b4= new Block(550,260);
    b5= new Block(580,260);
    b6= new Block(610,260);
    b7= new Block(640,260);

    b8= new Block(490,220);
    b9= new Block(520,220);
    b10= new Block(550,220);
    b11= new Block(580,220);
    b12= new Block(610,220);
  
    b13= new Block(520,200);
    b14= new Block(550,200);
    b15= new Block(580,200);
   
    b16=new Block(550,150);
    
    b17= new Block(950,130);
    b18= new Block(980,130);
    b19= new Block(1000,130);
    b20= new Block(1030,130);
    b21= new Block(1050,130);
   
    b22= new Block(980,90);
    b23= new Block(1010,90);
    b24= new Block(1025,90);
    
    b25= new Block(1000,50);

    poly= new Polygon(180,100);
    rope= new Rope(poly.body,{x:180,y:100});

    bg = createSprite(200,180,400,20);
    bg.addImage(bg_img);
    bg.scale=0.1;

}

function draw(){
    background(bg_img);

    Engine.update(engine);

    push(); 
    textSize(30);
    fill("orange");
    stroke("white");
    strokeWeight(3);
    text("Press Space To Get Another Chance.... ",20,50);
    pop();

    ground.display();
    Stand1.display();
    Stand2.display();

    fill("lightblue");
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    b21.display();

    fill("pink");
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b25.display();

    fill("lightgreen");
    b13.display();
    b14.display();
    b15.display();
    b22.display();
    b23.display();
    b24.display();

    fill("silver");
    b16.display();    

    poly.display();
    rope.display();
      
}

function mouseDragged(){
    Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.fly();
}

function keyPressed(){
    if(keyCode===32){
        rope.attach(poly.body);
    }
}