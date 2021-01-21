var garden,gardenImg;
var jerry,jerryOneAni,jerryTwoAni,jerryThreeAni,jerryFourAni;
var tom,tomOneAni,tomTwoAni,tomThreeAni,tomFourAni;

function preload() {
gardenImg=loadImage("garden.png");
jerryOneAni=loadAnimation("jerryOne.png");
jerryTwoAni=loadAnimation("jerryTwo.png");
jerryThreeAni=loadAnimation("jerryThree.png");
jerryFourAni=loadAnimation("jerryFour.png");
tomOneAni=loadAnimation("tomOne.png");
tomTwoAni=loadAnimation("tomTwo.png");
tomThreeAni=loadAnimation("tomThree.png");
tomFourAni=loadAnimation("tomFour.png");
}

function setup(){
    createCanvas(1000,800);
    garden = createSprite(500,400,0,0);
    garden.addImage("garden",gardenImg);

    jerry=createSprite(200,300,0,0);
    jerry.addAnimation("One",jerryOneAni);

}

function draw() {

    background(255);

    text(mouseX+','+mouseY,10,45);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
  if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("catRunning",tomTwoAni);
    cat.changeAnimation("catRunning")  }
}
