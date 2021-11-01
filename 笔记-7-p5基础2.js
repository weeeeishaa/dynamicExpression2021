//坐标变换（旋转）
rotate(45)  //把！！画布！！以坐标原点为原点顺时针转45度
//大三不向你走来你向大三走去

angleMode(DEGREES);//默认弧度制

//坐标变换（平移+旋转）

translate(width/2,height/2)//平移坐标系原点

push();//存档画布状态
pop();//读档画布状态

push();
translate(100,100);
rotate(45);
rect(0,0,50,50);
pop();

//曝洗
//泡普


//random特点：前后生成的随机数没有关联
function setup() {
    createCanvas(800, 200);
    background(255);
  }
  
  function draw() {
    noStroke()
    fill(226, 118, 80);
      
    beginShape();//开始画图
    for (let x = 0; x<= width; x ++) {
      let y = map(random(), 0, 1, 0, 200);//map 映射 映射的变量 范围0-1映射到0-200
      vertex(x, y);
    }
    
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);//结束画图（所有连线
  
    noLoop();//不循环
  }

//perlin噪声:自然噪声的生成算法
function setup() {
    createCanvas(800, 200);
    background(255);
  }
  
  function draw() {
    noStroke()
    fill(226, 118, 80);
    
    let xoff = 0;
    
    beginShape();
    for (let x = 0; x<= width; x ++) {
      let y = map(noise(xoff), 0, 1, 0, 200);//noise给偏移（每次有变幻）
      vertex(x, y);
      xoff += 0.01;
    }
    
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
  
    noLoop();
  }

noise(x);
//工作原理：同一位置x noise返回值完全一致 两个x越接近 返回值差异就越小

//粒子系统

position     //位置
veiocity     //速度（方向 大小）
color        //颜色
lifetime     //生存时长
age          //存在时间
shape        //形状
size         //尺寸
transparency //透明度


  
  