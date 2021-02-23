var backgroundImg
var ballon,ballonImg
var database, position;

function preload(){
backgroundImg =  loadImage("Hot Air Ballon-01.png")
ballonImg = loadImage("Hot Air Ballon-02.png")
}


function setup() {
  database = firebase.database();
  console.log(database);
  createCanvas(1500,600);
  ballon = createSprite(180, 450, 50, 50);
  ballon.addImage(ballonImg)
  ballon.scale = 0.5

  var ballonPosition = database.ref('ballon');
  ballonPosition.on("value", readPosition, showError);
}

function draw() {
  background(backgroundImg);  
  if (keyDown(LEFT_ARROW)){
    writePosition(-1,0);
  }
  else if (keyDown(RIGHT_ARROW)){
    writePosition(1,0);
  }
  else if (keyDown(UP_ARROW)){
    writePosition(0,-1);
  }
  else if (keyDown(DOWN_ARROW))[
    writePosition(0,+1)
  ]
  drawSprites();
}
function writePosition(x,y){
  database.ref('ballons').set({
    'x': position.x + x ,
    'y': position.y + y
  })
}
function readPosition(data){ 
  position = data.val();
  console.log(position.x);
  ballon.x = position.x;
  ballon.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}
