var PLAY = 1;
var END = 0;
var gameState = PLAY;
var bow , arrow,  background, redB, pinkB, greenB ,blueB, orangeB, purpleB, yellowB, arrowGroup;
var bowImage, arrowImage, green_balloonImage,
 red_balloonImage, pink_balloonImage,
 blue_balloonImage, orange_balloonImage, purple_balloonImage,
 yellow_balloonImage, backgroundImage;

var score =0;

var cooldown1, cooldown2;

var mousexd;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  orange_balloonImage = loadImage("orange_balloon0.png");
  purple_balloonImage = loadImage("purple_balloon0.png");
  yellow_balloonImage = loadImage("yellow_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //crear fondo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  //crear el arco para disparar las flechas
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  //cooldown del disparo de las flechas
cooldown1=createSprite(200,200,1,400)
cooldown1.visible=false;
cooldown2=createSprite(300,200,1,400)
cooldown2.visible=false;

   score = 0  
  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  orangeB= new Group();
  purpleB= new Group();
  yellowB= new Group(); 
  arrowGroup= new Group();
 
  mousexd=createSprite(200,200,100,100)
}

function draw() {
 background(0);
mousexd.y=World.mouseY
mousexd.x=World.mouseX

 if(gameState === PLAY){

  //mover suelo
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //mover el arco
  bow.y = World.mouseY
  
   //liberar las flechas al presionar la barra espaciadora 
   if (keyDown("space")&& cooldown1.isTouching(cooldown2)) {
    createArrow();
    cooldown2.x= 300;
      if (mousePressedOver(mousexd)) {

        createArrow();
        cooldown2.x= 300;
      
    }
  }
    //Enfriamiento para el disparo de la flecha
    cooldown2.velocityX= -3
    cooldown2.bounceOff(cooldown1);
  
  //crear enemigos continuos
  var select_balloon = Math.round(random(1,7));
  
  if (World.frameCount % 100 == 0) {
    switch(select_balloon ){
      case 1: redBalloon();
      break;
      case 2:blueBalloon();
      break;
      case 3:pinkBalloon();
      break;
      case 4:greenBalloon();
      break;
      case 5:orangeBalloon();
      break;
      case 6:purplekBalloon();
      break;
      case 7:yellowBalloon();
      break;
      default:break;
    }
  }

  /*Descomentar la sentencia correcta para que 
  el juego cambie a estado "END" 
  al golpear el globo rojo*/
  if (arrowGroup.isTouching(redB))
{
  score=score+5;
    redB.destroyEach();
    gameState=END; 
   }
 
  if (gameState === END) {
  bow.destroy();
  scene.velocityX = 0;
}


 if (arrowGroup.isTouching(greenB)) {
  greenB.destroyEach();
  arrowGroup.destroyEach();
  score=score+3;
}

/*Descomentar el el bloque de código if correcto para 
destruir el globo azul al ser  
golpeado por las flechas */

  if (arrowGroup.isTouching(blueB)) {
   blueB.destroyEach();
  arrowGroup.destroyEach();
   score=score+2;
 }



if (arrowGroup.isTouching(pinkB)) {
  pinkB.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
}

if (arrowGroup.isTouching(orangeB)) {
  orangeB.destroyEach();
  arrowGroup.destroyEach();
  score=score+2;
}

if (arrowGroup.isTouching(purpleB)) {
  purpleB.destroyEach();
  arrowGroup.destroyEach();
  score=score+3;
}

if (arrowGroup.isTouching(yellowB)) {
  yellowB.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
}
 }
  
  drawSprites();
  text("Puntuación: "+ score, 300,50);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  pinkB.add(pink);
}

function orangeBalloon() {
  var orange = createSprite(0,Math.round(random(20, 370)), 10, 10);
  orange.addImage(orange_balloonImage);
  orange.velocityX = 3;
  orange.lifetime = 150;
  orange.scale = 1;
  orangeB.add(orange);
}

function purplekBalloon() {
  var purple = createSprite(0,Math.round(random(20, 370)), 10, 10);
  purple.addImage(purple_balloonImage);
  purple.velocityX = 3;
  purple.lifetime = 150;
  purple.scale = 1
  purpleB.add(purple);
}

function yellowBalloon() {
  var yellow = createSprite(0,Math.round(random(20, 370)), 10, 10);
  yellow.addImage(yellow_balloonImage);
  yellow.velocityX = 3;
  yellow.lifetime = 150;
  yellow.scale = 1
  yellowB.add(yellow);
}

//crear las flechas para el arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
  arrow.debug=false;
  arrow.setCollider("rectangle",-10,0,220,60);
   
}
