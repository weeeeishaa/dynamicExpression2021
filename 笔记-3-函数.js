//函数(Function) 封装了一段可被执行的代码块-反复使用
//函数声明
function funcName(param1,param2,params){
    //function statements
    return statement;
}
//function+函数名称+(变量名称){描述 返回值}

//函数调用
funcName(param1,param2);

//几种函数声明的方式：
//function关键字
function funcName(param1,param2,params){
    //function statements
    return statement;
}
//函数表达式、匿名函数--使函数转化为变量
var funcName = funtion(params)
{
   //function statements
   return statements;
}
//箭头函数
(params) => expression;

(params) => {
    //function statements
    return statement;
}

//function构造函数:程序在运行的过程中产生新的代码-交互
const add = new Function (
     'x',
     'y',
     'return x+y '
);


//形式参数（parameters）函数声明时列的变量名称
//实际参数（arguments）调用函数时由函数接收的真实值
function sum(num1,num2){
    alert(num1+num2);
}//形式参数
sum(100,200);//实际参数

console.log//调试工具
debugger;//调试（开发者工具)

function sum(){
    var sum=0;
    var count = arguments.length;
    for(var i=0;i<count; i++){
      sum+=arguments[i];
    }
    return sum;
}
  
alert(sum(1,2,3,4,5,6,7,8,9));

//函数返回
function getMax(num1,num2){
    if(num1>num2)
    return num1;
    else return num2;
}
//return后的语句不再执行，返回值作为函数值返回调用函数的位置

封装信息隐藏原则
//只需要知道输入输出（接口）

作用域
//全局作用域 当前程序中所有的函数、块中有效
//函数作用域 只在某个函数体中有效，var/let
function getMax(num1,num2){//num1、2即位函数作用域
    if(num1>num2)
    return num1;
    else return num2;
}
//块级作用域 只在if、for等语句中有效，let

let与var
//var为全局或函数变量，let为块级变量
//let：块级作用域 不允许重复声明 不会变量提升

var可以先调用后声明
//好不严谨的语言！



function turnRight(){
    turnLeft();
    turnLeft();
    turnLeft();
  }
  
function turnBack(){
    turnLeft();
    turnLeft();
  }
function jump(){
    turnLeft();
    move();
    turnRight();
  }

function getInput(sentences){
    let input = prompt(sentences);
    let value = parseInt(input,10);
    if (value >= 1 && value <=20 && value % 2 == 1){
        return value;
    }
    else {
        return getInput("请输入20内的奇数");
    }
}

function toRow(num){
    for(let i=0;i<20-num;i++){
        jump();
    }
}

function placeRow(num){
    let beepers = num;
    let spaces = Math.floor((20-beepers)/2);//取整 math.round 四舍五入

    function moveSteps(){
        for(let i=0;i<spaces;i++) move();   
    }
    function placeBeepers(){
        for(let i =0;i<beepers;i++){
            putBeeper();
            move();
        }
    }
    
    moveSteps();
    placeBeepers();
}

function toNextRow(){
    turnBack();
    jump();
    while(frontIsClear()) {
        move();
    }
    turnBack();
}

function drawTri(num1){
    let value = getInput("制定一个20内的奇数");
    
    toRow(Math.floor((20-(value+1)/2)/2));

    while(value>0){
        placeRow(value);
        toNextRow();
        value-=2;
    }
}

drawTri();