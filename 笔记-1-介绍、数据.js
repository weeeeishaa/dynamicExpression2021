//动态表达基础（一)
//自动化、脚本化 插件

//指定单词描述功能（算法)
//运行修正视觉化成果（图形)
//外界反应（交互)

//算法的设计与推荐

//Karel   主体
//Beeper 工具
//Corner 坐标
//Wall   边界
//方位 东南西北
//指令：
move();
trunLeft();
pickBeeper();
putBeeper();

//定义新功能
function 名称(){
}

function turnRight(){
  turnLeft();
  turnLeft();
  turnLeft();
}

function turnBack(){
  turnLeft();
  turnLeft();
}

function fillPothole(){
  turnRight();
  move();
  putBeeper();
  turnBack();
  move();
  turnRight();
}

//问题分解的原则：
//一、	一个指令只完成概念上的一个简单任务 指令名称应该能最恰当表明任务功能
//二、	指令尽可能完成通用的功能，使其尽可能被重复使用


//算法：数据结构+控制流程

数据类型
//数值         1 0.2 3E+88
//字符串      “”’’（注意字符串和数值的区分 37+63!="37"+"63")
//布尔（逻辑) ture false
 
运算
//+-*/%

关系
//< > <= >= == 相等 != ===等价

变量-名称+数值
//Var age = 18  Let name =””

Age=age+1;
Age+=1;
Age++;
++age;
Age=age-1;
Age-=1;
Age--;
--age;