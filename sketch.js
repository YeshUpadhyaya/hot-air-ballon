var balloon,balloonImage1,balloonImage2;
// create database and position variable here

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
   
  
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;
  textSize(20); 
  database=firebase.database()

  database.ref("balloon").on("value",(data)=>{
      pos=data.val();
      balloon.x=pos.x;
      balloon.y=pos.y;
  })
}

// function to display UI

function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    move(-1,0)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    
  }
  else if(keyDown(RIGHT_ARROW)){
    move(1,0)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    
  }
  else if(keyDown(UP_ARROW)){
    move(0,-9)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.scale=balloon.scale-0.01

  }
  else if(keyDown(DOWN_ARROW)){
    move(0,+1)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function move(x,y){
  database.ref("balloon").set({
      "x":balloon.x+x,
      "y":balloon.y+y,
  })
}