var canvas, backgroundImage;
var ball;
var gameState;

function preload(){
  
}

function setup(){
  var canvas = createCanvas(800,500);

  gate1 = createSprite(200,375,10,50);
  gate2 = createSprite(150,275,10,50);
  gate3 = createSprite(275,415,50,10);
  gate4 = createSprite(425,200,50,10);
  gate5 = createSprite(450,425,10,50);
  gate6 = createSprite(50,175,10,50);
  ball = createSprite(50,25,15,15); 
  end = createSprite(275,490,40,20)
  topEdge = createSprite(250,0,500,10); 
  bottomEdgeLeft = createSprite(125,500,250,10);
  bottomEdgeRight = createSprite(400,500,200,10);
  rightEdge = createSprite(500,250,10,500);
  leftEdge = createSprite(0,250,10,500);
  key1 = createSprite(25,275,8,8);
  key2 = createSprite(475,425,8,8);
  key3 = createSprite(175,275,8,8);
  key4 = createSprite(175,425,8,8);
  key5 = createSprite(325,225,8,8);
  key6 = createSprite(475,25,8,8);

  ball.shapeColor = "silver"
  end.shapeColor = "gold"
  gate1.shapeColor = "red"
  gate2.shapeColor = "yellow"
  gate3.shapeColor = "green"
  gate4.shapeColor = "blue"
  gate5.shapeColor = "pink"
  gate6.shapeColor = "purple"
  topEdge.shapeColor = "orange"
  bottomEdgeLeft.shapeColor = "orange"
  bottomEdgeRight.shapeColor = "orange"
  rightEdge.shapeColor = "orange"
  leftEdge.shapeColor = "orange"
  key1.shapeColor = "red"
  key2.shapeColor = "yellow"
  key3.shapeColor = "green"
  key4.shapeColor = "blue"
  key5.shapeColor = "pink"
  key6.shapeColor = "purple"
  wall1 = createSprite(25,50,50,10);
  wall2 = createSprite(150,50,100,10);
  wall3 = createSprite(325,50,50,10);
  wall4 = createSprite(475,50,50,10);
  wall5 = createSprite(250,50,10,100);
  wall6 = createSprite(150,100,200,10);
  wall7 = createSprite(100,100,10,100);
  wall8 = createSprite(200,125,10,50);
  wall9 = createSprite(300,100,10,100);
  wall10 = createSprite(350,100,10,100);
  wall11 = createSprite(400,100,100,10);
  wall12 = createSprite(400,25,10,50);
  wall13 = createSprite(25,150,50,10);
  wall14 = createSprite(275,150,50,10);
  wall15 = createSprite(475,150,50,10);
  wall16 = createSprite(150,175,10,50);
  wall17 = createSprite(250,175,10,50);
  wall18 = createSprite(400,175,10,50);
  wall19 = createSprite(450,175,10,50);
  wall20 = createSprite(250,200,300,10);
  wall21 = createSprite(50,250,10,100);
  wall22 = createSprite(100,325,10,250);
  wall23 = createSprite(400,250,200,10);
  wall24 = createSprite(300,225,10,50);
  wall25 = createSprite(175,250,50,10);
  wall26 = createSprite(25,300,50,10);
  wall27 = createSprite(200,275,10,50);
  wall28 = createSprite(150,300,100,10);
  wall29 = createSprite(75,350,50,10);
  wall30 = createSprite(25,400,50,10);
  wall31 = createSprite(75,450,50,10);
  wall32 = createSprite(250,375,10,250);
  wall33 = createSprite(200,350,100,10);
  wall34 = createSprite(150,400,10,100);
  wall35 = createSprite(175,450,50,10);
  wall36 = createSprite(200,425,10,50);
  wall37 = createSprite(300,300,100,10);
  wall38 = createSprite(350,375,10,150);
  wall39 = createSprite(300,425,10,150);
  wall40 = createSprite(400,350,100,10);
  wall41 = createSprite(400,325,10,50);
  wall42 = createSprite(475,300,50,10);
  wall43 = createSprite(450,400,100,10);
  wall44 = createSprite(400,450,100,10);

  wall1.shapeColor = "orange"
  wall2.shapeColor = "orange"
  wall3.shapeColor = "orange"
  wall4.shapeColor = "orange"
  wall5.shapeColor = "orange"
  wall6.shapeColor = "orange"
  wall7.shapeColor = "orange"
  wall8.shapeColor = "orange"
  wall9.shapeColor = "orange"
  wall10.shapeColor = "orange"
  wall11.shapeColor = "orange"
  wall12.shapeColor = "orange"
  wall13.shapeColor = "orange"
  wall14.shapeColor = "orange"
  wall15.shapeColor = "orange"
  wall16.shapeColor = "orange"
  wall17.shapeColor = "orange"
  wall18.shapeColor = "orange"
  wall19.shapeColor = "orange"
  wall20.shapeColor = "orange"
  wall21.shapeColor = "orange"
  wall22.shapeColor = "orange"
  wall23.shapeColor = "orange"
  wall24.shapeColor = "orange"
  wall25.shapeColor = "orange"
  wall26.shapeColor = "orange"
  wall27.shapeColor = "orange"
  wall28.shapeColor = "orange"
  wall29.shapeColor = "orange"
  wall30.shapeColor = "orange"
  wall31.shapeColor = "orange"
  wall32.shapeColor = "orange"
  wall33.shapeColor = "orange"
  wall34.shapeColor = "orange"
  wall35.shapeColor = "orange"
  wall36.shapeColor = "orange"
  wall37.shapeColor = "orange"
  wall38.shapeColor = "orange"
  wall39.shapeColor = "orange"
  wall40.shapeColor = "orange"
  wall41.shapeColor = "orange"
  wall42.shapeColor = "orange"
  wall43.shapeColor = "orange"
  wall44.shapeColor = "orange"

}

function draw(){
  background(0,128,128);

  textSize(25);
  fill("red")
  text("Key Escape", 580, 25);
  text("________________________________________", 500, 30);
  textSize(20);
  text("How To Play", 590, 55);
  textSize(16);
  text("Use The Arrow Keys To Navigate", 530, 85);
  text("Around The Maze", 580, 105)
  text("Collect Keys To Open Doors", 550, 145);
  text("And Exit The Maze", 580, 165);
  textSize(25);
  text("Gates Opened", 570, 240);
  text("________________________________________", 500, 245);
  textSize(18);
  fill("gold")
  text("END", 256, 475);
  

  ball.visible = true

  if(keyDown(LEFT_ARROW)){
    changePosition(-7,0);
}
else if(keyDown(RIGHT_ARROW)){
    changePosition(7,0);
}
else if(keyDown(UP_ARROW)){
    changePosition(0,-7);
}
else if(keyDown(DOWN_ARROW)){
    changePosition(0,7);
}

    

    if(ball.isTouching(topEdge)) {
      ball.collide(topEdge);
    }
    if(ball.isTouching(bottomEdgeLeft)) {
      ball.collide(bottomEdgeLeft);
    }
    if(ball.isTouching(bottomEdgeRight)) {
      ball.collide(bottomEdgeRight);
    }
    if(ball.isTouching(rightEdge)) {
      ball.collide(rightEdge);
    }
    if(ball.isTouching(leftEdge)) {
      ball.collide(leftEdge);
    }
    if(ball.isTouching(end)) {
      textSize(80);
      fill("gold")
      text("You Win", 300, 250);
    }



  if(ball.isTouching(gate1)) {
    ball.collide(gate1);
    }
  if(ball.isTouching(gate2)) {
    ball.collide(gate2);
    }
  if(ball.isTouching(gate3)) {
    ball.collide(gate3);
    }
  if(ball.isTouching(gate4)) {
    ball.collide(gate4);
    }
  if(ball.isTouching(gate5)) {
    ball.collide(gate5);
    }
  if(ball.isTouching(gate6)) {
      ball.collide(gate6);
      }

  if(key1.isTouching(gate1)){
    gateOneMove(425,-50);
  }
  if(key2.isTouching(gate2)){
    gateTwoMove(475,150);
  }
  if(key3.isTouching(gate3)){
  gateThreeMove(450,0);
  }
  if(key4.isTouching(gate4)){
  gateFourMove(300,125);
  }
  if(key5.isTouching(gate5)){
  gateFiveMove(100,0);
  }
  if(key6.isTouching(gate6)){
  gateSixMove(500,150);
  }
  



    if(ball.isTouching(wall1)) {
      ball.collide(wall1);
    }
    if(ball.isTouching(wall2)) {
      ball.collide(wall2);
    }
    if(ball.isTouching(wall3)) {
      ball.collide(wall3);
    }
    if(ball.isTouching(wall4)) {
      ball.collide(wall4);
    }
    if(ball.isTouching(wall5)) {
      ball.collide(wall5);
    }
    if(ball.isTouching(wall6)) {
      ball.collide(wall6);
    }
    if(ball.isTouching(wall7)) {
      ball.collide(wall7);
    }
    if(ball.isTouching(wall8)) {
      ball.collide(wall8);
    }
    if(ball.isTouching(wall9)) {
      ball.collide(wall9);
    }
    if(ball.isTouching(wall10)) {
      ball.collide(wall10);
    }
    if(ball.isTouching(wall11)) {
      ball.collide(wall11);
    }
    if(ball.isTouching(wall12)) {
      ball.collide(wall12);
    }
    if(ball.isTouching(wall13)) {
      ball.collide(wall13);
    }
    if(ball.isTouching(wall14)) {
      ball.collide(wall14);
    }
    if(ball.isTouching(wall15)) {
      ball.collide(wall15);
    }
    if(ball.isTouching(wall16)) {
      ball.collide(wall16);
    }
    if(ball.isTouching(wall17)) {
      ball.collide(wall17);
    }
    if(ball.isTouching(wall18)) {
      ball.collide(wall8);
    }
    if(ball.isTouching(wall19)) {
      ball.collide(wall19);
    }
    if(ball.isTouching(wall20)) {
      ball.collide(wall20);
    }
    if(ball.isTouching(wall21)) {
      ball.collide(wall21);
    }
    if(ball.isTouching(wall22)) {
      ball.collide(wall22);
    }
    if(ball.isTouching(wall23)) {
      ball.collide(wall23);
    }
    if(ball.isTouching(wall24)) {
      ball.collide(wall24);
    }
    if(ball.isTouching(wall25)) {
      ball.collide(wall25);
    }
    if(ball.isTouching(wall26)) {
      ball.collide(wall26);
    }
    if(ball.isTouching(wall27)) {
      ball.collide(wall27);
    }
    if(ball.isTouching(wall28)) {
      ball.collide(wall28);
    }
    if(ball.isTouching(wall29)) {
      ball.collide(wall29);
    }
    if(ball.isTouching(wall30)) {
      ball.collide(wall30);
    }
    if(ball.isTouching(wall31)) {
      ball.collide(wall31);
    }
    if(ball.isTouching(wall32)) {
      ball.collide(wall32);
    }
    if(ball.isTouching(wall33)) {
      ball.collide(wall33);
    }
    if(ball.isTouching(wall34)) {
      ball.collide(wall34);
    }
    if(ball.isTouching(wall35)) {
      ball.collide(wall35);
    }
    if(ball.isTouching(wall36)) {
      ball.collide(wall36);
    }
    if(ball.isTouching(wall37)) {
      ball.collide(wall37);
    }
    if(ball.isTouching(wall38)) {
      ball.collide(wall38);
    }
    if(ball.isTouching(wall39)) {
      ball.collide(wall39);
    }
    if(ball.isTouching(wall40)) {
      ball.collide(wall40);
    }
    if(ball.isTouching(wall41)) {
      ball.collide(wall41);
    }
    if(ball.isTouching(wall42)) {
      ball.collide(wall42);
    }
    if(ball.isTouching(wall43)) {
      ball.collide(wall43);
    }
    if(ball.isTouching(wall44)) {
      ball.collide(wall44);
    }
    
    
    
    if(ball.isTouching(key1)) {
      key1.x = ball.x - 4;
      key1.y = ball.y + 2;
    }
    if(ball.isTouching(key2)) {
      key2.x = ball.x + 4;
      key2.y = ball.y + 2;
    }
    if(ball.isTouching(key3)) {
      key3.x = ball.x + 2;
      key3.y = ball.y + 4;
    }
    if(ball.isTouching(key4)) {
      key4.x = ball.x + 2;
      key4.y = ball.y + 4;
    }
    if(ball.isTouching(key5)) {
      key5.x = ball.x + 4;
      key5.y = ball.y + 2;
    }
    if(ball.isTouching(key6)) {
      key6.x = ball.x - 4;
      key6.y = ball.y + 2;
    }

    drawSprites();
  }

  
  
  
  
  function changePosition(x,y){
  ball.x = ball.x + x;
  ball.y = ball.y + y;
}

  function gateOneMove(x,y){
    gate1.x = gate1.x + x;
    gate1.y = gate1.y + y;
    key1.x = key2.x + x;
    key1.y = key2.y + y;
    key1.visible = false
  }
  function gateTwoMove(x,y){
    gate2.x = gate2.x + x;
    gate2.y = gate2.y + y;
    key2.x = key1.x + x;
    key2.y = key1.y + y;
    key2.visible = false
  } 
  function gateThreeMove(x,y){
    gate3.x = gate3.x + x;
    gate3.y = gate3.y + y;
    key3.x = key1.x + x;
    key3.y = key1.y + y;
    key3.visible = false
  }
  function gateFourMove(x,y){
    gate4.x = gate4.x + x;
    gate4.y = gate4.y + y;
    key4.x = key1.x + x;
    key4.y = key1.y + y;
    key4.visible = false
  }
  function gateFiveMove(x,y){
    gate5.x = gate5.x + x;
    gate5.y = gate5.y + y;
    key5.x = key1.x + x;
    key5.y = key1.y + y;
    key5.visible = false
  }
  function gateSixMove(x,y){
    gate6.x = gate6.x + x;
    gate6.y = gate6.y + y;
    key6.x = key1.x + x;
    key6.y = key1.y + y;
    key6.visible = false
  }
  








