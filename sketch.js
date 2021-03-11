var bg, tom, tomIMG1, tomImg2, tomIMG3, jerry, jerryIMG1, jerryIMG2, jerryIMG3
function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    tomIMG1= loadAnimation("images/cat1.png");
    tomImg2= loadAnimation("images/cat2.png","images/cat3.png");
    tomIMG3= loadAnimation("images/cat4.png");
    jerryIMG1= loadAnimation("images/mouse1.png");
    jerryImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryIMG3= loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here.
    tom = createSprite(870,600,10,10);
    tom.addAnimation("tomSleeping",tomIMG1);
    tom.scale=0.2
    jerry = createSprite(200,600,10,10);
    jerry.addAnimation("jerryStanding",jerryIMG1);
    jerry.scale=0.15


}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if (tom.x-jerry.x<tom.width/2-jerry.width/2){
        tom.velocityX=0
        tom.addAnimation("tomLast",tomIMG3)
        tom.x=300
        tom.scale=0.2
        tom.changeAnimation("tomLast")
        jerry.addAnimation("jerryLast",jerryIMG3)
        jerry.scale=0.15
        jerry.changeAnimation("jerryLast")
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode===LEFT_ARROW){
      tom.velocityX=-5
      tom.addAnimation("tomRunning",tomImg2)
      tom.changeAnimation("tomRunning")
      jerry.addAnimation("jerryTeasing",jerryImg2)
      jerry.changeAnimation("jerryTeasing")
  }


}
