//面向过程 面向对象（OOP）
//面向过程：从事物工作的过程/原理出发解决问题
//面向对象：烤面包机和面包两个对象之间的交互
//无绝对

//烤面包机 ：
//对象- toaster
//属性- temperature elapsedTime...
//方法- load() toast()...

//创建对象 {}扩住的属性集合
var pet = {
    name:'codie',
    age:6,
    weight:12
};

//pet(变量)-引用/指向-name、age、weight(对象/实体)
//操作对象属性：通过操作符(.)来进行
alert(pet.age);     //访问
pet.age += 1        //赋值
pet.color = 'brown';//新增
delete pet.weight;  //删除（对象的属性）


//！！实参传递给形参的为实参的副本！！按值传递
//实参为基本类型（值/布尔值...）
function loseWeight(weight,amount){
    weight = weight - amount
}
var myWeight=72;
loseWeight(myWeight,2);
//注意，执行完此条函数后myWeight的值为72不变

//实参为对象（或函数）：
//此时me仍为mE的拷贝，但是都作为一个地址指向weight的引用，因此函数可以作用到mE.weight
function loseWeight(me,amount){
    me.weight = me.weight - amount
}
var mE = {
    age:18,
    weight:72
}
loseWeight(mE,2);
//此时mE.weight的值变为70


//为对象添加方法（对象的属性是函数） 匿名函数
var pet = {
    name:'codie',
    age:6,
    weight:12,
    bark:function(){
        if(this.age > 5)//对象方法内部引用对象属性时需加this. 否则会当成变量处理
        {
            alert(this.name+'says "WOOF WOOF"');
        }
        else alert(this.name+'says "woof woof"');
    }
};

myPet.bark();

this//可视为一个变量
//每当对象中的方法被调用时，在该方法内都可以使用this来引用方法被调用的对象

//避免重复
//一、字面量：模板
//二、（对象）构造函数
function Pet(name,age,weight)//OOP约定首字母大写
    {
    this.name = name;
    this.age = age;
    this.weight= weight;
}
//构造函数通常没有返回值

//使用构造函数创建对象(var定义+new+函数调用)
var fido = new Pet("Fido",3,7);
//哇，fido等于

//构造函数的工作原理：
//new运算符创建一个新的空对象
//new设置this指向新对象
//调用函数pet 并传递相应实参
//执行构造函数 为新创建的this对象赋属性值
//new运算符返回this，赋值给变量fido

function HouseBuilder(width,height){
    this.width = width;
    this.height= height;
    this.wallHeight = Math.floor(height)/2;
    this.doorWidth = 3;
    this.doorHeight = 3;

    this.run = function(){
        this.makeWall(1,this.wallHeight);
        this.makeWall(this.width - 2, this.wallHeight);

        this.makeDoor(Math.floor(this.width)/2 - 2, this.doorWidth, this.doorHeight);

        this.makeWindow(Math.floor(this.height)/2 - 1, 3);
        this.makeWindow(Math.floor(this.height)/2 - 1, this.width - 5);

        this.makeRoof(Math.floor(this.height)/2 - 1, 0);
        this.goTo(0,0);
    };

    this.backToOrigin = function(){
        while(!facingWest()) turnLeft();
        while(frontIsClear())  move();
        turnLeft();
        while(frontIsClear())  move();
        turnLeft();
    };

    this.goTo = function(rows,columns){
        this.backToOrigin();
        for(let c = 0; c < columns; c++){
            move();
        }
        turnLeft();
        for(let r = 0; r < rows; r++){
            move();
        }
        turnRight();
    };

    this.makeWall = function(col, wallHeight){
        this.goTo(0,col);
        turnLeft();
        for(let i = 0; i < wallHeight; i++){
            putBeeper();
            move();
        }
    };

    this.makeDoor = function(col,doorWidth,doorHeight){
        this.goTo(0,col);
        turnLeft();
        for(let i = 0; i < doorHeight - 1; i ++){
            putBeeper();
            move();
        }
        turnRight();

        for(let i = 0; i < doorWidth - 1; i ++){
            putBeeper();
            move();
        }
        turnRight();

        for(let i = 0; i < doorHeight - 1; i ++){
            putBeeper();
            move();
        }
        turnRight();
        putBeeper();
    };

    this.makeWindow = function(row,col){
        this.goTo(row,col);
        putBeeper();
        move();
        putBeeper();
        turnLeft();
        move();
        putBeeper();
        turnLeft();
        move();
        putBeeper();
    };

    this.makeRoof = function(startRow,startCol){
        let row = startRow;
        let col = startCol;
        this.goTo(row,col);
        while(row < this.height -1){
            putBeeper();
            move();
            col++;
            turnLeft();
            move();
            row++;
            turnRight();
        }
        while(col < this.width -1){
            putBeeper();
            move();
            col++;
            turnRight();
            move();
            row--;
            turnLeft();
        }
        putBeeper();
    };
}

var builder = new HouseBuilder(11,10);
builder.run();