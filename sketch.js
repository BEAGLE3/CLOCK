var hr,mn,sc;


function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);

 hr=hour()
 mn=minute()
 sc=second()

}

function draw() {
  background(255,255,255); 

  angleMode(DEGREES)

  scAngle=map(sc,0,60,0,360);
  mnAngle=map(mn,0,60,0,360);
  hrAngle=map(hr,0,12,0,360);

  push()
  rotate(scAngle);
  stroke("blue");
  strokeWeight(7);
  line(200,0,100,0);
  pop()

  push()
  rotate(mnAngle);
  stroke("yellow");
  strokeWeight(7);
  line(200,0,100,0);
  pop()

  push()
  rotate(hrAngle);
  stroke("pink");
  strokeWeight(7);
  line(200,0,100,0);
  pop()
  
  
  drawSprites();
}