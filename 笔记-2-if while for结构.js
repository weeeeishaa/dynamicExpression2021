While结构
var step = 9;
while (step > 0){
  putBeeper();
  step--;
}

function moveToWall(){
  while(frontIsClear()){
    move();
  }
}
for (var i = 0; i < 4; i++){
moveToWall();
putBeeper();
turnLeft();
}

For循环
for(let i = 0; i < 9; i++){
  putBeeper();
}


If条件语句
If(逻辑条件)
{
程序语块
}

逻辑运算
//!逻辑非
If(!frontIsClear())
{
    move();
}
 
//||逻辑或
If(!lefttIsClear()||!rightIsClear())
{
    move();
}


//&&逻辑与
If(!lefttIsClear() &&!rightIsClear())
{
    move();
}

 
循环填坑算法
function turnRight(){
  turnLeft();
  turnLeft();
  turnLeft();
}

function down(){
  turnRight();
  move();
  turnLeft();
}
  
function jump(){
  turnLeft();
  move();
  turnRight();
}
  
function fillHole(){
  if(rightIsClear()){
    down();
    if(!beepersPresent()) putBeeper();
    jump();
  }
}
  
while(frontIsClear()){
  fillHole();
  move();
}
fillHole();


