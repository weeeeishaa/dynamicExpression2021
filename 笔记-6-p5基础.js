//JavaScript库 library（framework）
//封装好的一组JavaScript模块（变量 函数 对象等）
//图形 字体 界面 动画 视频 3d（（去找库

p5.js //https://p5js.org
// https://codepen.io/weisha

//p5基本模版
// https://codepen.io/xiaowp/pen/KKvVJNG

//p5基本结构
function setup(){
    createCanvas(400,400);
}

function draw(){
    background(255);
}
//程序运行时先调用一次setup 然后不断重复调用draw

function setup(){
    console.log("setup")
    createCanvas(400,400);
}

function draw(){
    console.log("draw")
    background(255);
}

console.log("run")

//console 先显示run 后一次setup 后5953次draw
//先执行外部 后执行一次setup 后一直执行draw

p5坐标系
// ------------➡️x=400
//｜
//｜
//｜
//｜
//｜
//⬇️y=400

基本图形
//point  line  rect  ellipse（椭圆）
//绘制位置
//尺寸
//颜色

point(4,5);//x=4 y=5
line(1,3,8,3); //起点终点的xy

rect(2,3,5,4);//左上角的坐标+宽+高

rectMode(CENTER);
rect(3,3,5,5);//中心点的坐标 宽 高

rectMode(CORNERS);
rect(3,3,5,5);//左上坐标+右下坐标

椭圆
//默认模式为center

//其他基本图形
//triangle arc quad curve

颜色(灰阶);
//0黑色 255白色 0-255中间的某一个值表示某一级别的灰色

//背景色 笔画色 填充色
background(255);//背景白色

fill(255);//填充白色
notFill();//无填充色

stroke(0);//绘制颜色是黑色
noStroke();//没有边线
//最近影响


颜色(RGB);
fill(55,55,55);//0-255

颜色(透明度);
//4个值：rgb+alpha 0完全透明 255 完全不透明


常用p5全局变量()
width,height    //画布宽 高
frameCount      //启动后绘制的总帧数
mouseX,mouseY   //鼠标在当前绘制帧所在的位置
pmouseX,pmouseY //鼠标在前一帧所在的位置
movedX,movedY   //鼠标与前一绘制帧相比移动的距离
mouseIsPressed  //当前是否有鼠标按下
mouseButton     //当前是否有键盘上的键按下
keyIsPressed    //当前是否有键盘上的键被按下
key             //当前按下的键盘键
keyCode         //当前按下的键盘键ASCII编码

//background()放在setup中可以实现用鼠标产生变化（只在最开始填充背景色）

常用p5事件函数
mouseMoved()    //
mouseDragged()  //当鼠标移动同时按下时被调用
mousePressed()  //
mouseReleased() //
mouseClicked()  //鼠标按下且很快释放
keyPressed()    //
keyReleased()   //


随机数
random(10);      //0-9中的一个数据（不包括10）
random(2,10);    //2-9 （包括2不包括10）
random([1,3,5]); //1或3或5
random();        //0-1中的某一个值


soomth();//平滑 但是计算量更大-


var x, y, ram;
var r, g, b, a;

function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  x = mouseX;
  y = mouseY;
  ram = random(10,20);
  r = random(255);
  g = random(255);
  b = random(255);
  
  nostroke();
  fill(r,g,b,a);
  ellipse(x,y,ram,ram);
}