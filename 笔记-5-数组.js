//数组储存多个（类型类似的）值（元素）的数据类型，元素之前用逗号分隔
//走迷宫.js中开头建立了6*6的地图数组
var map = [
    [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
    [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
    [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
    [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
    [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
    [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
   ];
//数组本身没有名字（对象）-- map这个变量储存一个引用，指向……

//元素选择 
//索引index  ***数组的索引从0开始***  (偏移量)

var a = map[0];
map[0] = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
map[0][0] = [0,0,0,0,0];
map[0][0][0] = 0;


var daysOfWeek = [
    "monday","tuesday","wednesday","thursday","friday","saturday","sunday"
]

for (let i = 0; i < daysOfWeek.length; i ++){
    let day = daysOfWeek[i];
    console.log(day);
}//迭代

//索引越界  
//选择数组索引范围外的元素    返回undefined
//对数组索引范围外的元素赋值  创建该元素
var daysOfWeek = []

daysOfWeek[0] = "monday";
daysOfWeek[1] = "tuesday";

daysOfWeek[6] = "sunday";
alert('目前数组的长度为'+ daysOfWeek.length)

array.push(value,b)//数组末尾添加一个或多个元素
array.pop()//移除并返回数组最后一个元素 数组为空时返回undefined
array.shift()//移除并返回数组最开始的一个元素 数组为空时返回undefined
array.unshift(value)//数组开头添加一个或多个元素

array.spilce(index,count,a,b);//从函数的index后开始移除count个，并添加a,b……

array.reverse()//数组中所有的元素顺序反转
array.sort(cmp)//给数组中所有元素进行排序，其中cmp是可以省略的比较函数
let numbers = [222, 33, 4, 1111]
//默认比较函数： 111 222 33 4  字典序升序排序 （相当于对字符串做排序）
numbers.sort(function(n1,n2){
    return n1 - n2;
});//n1 n2 任意两个函数进行比较
//比较函数返回一个数字来表示两个值之间的顺序关系 
//n1在前 返回负 n2在前 返回正 排序位置相同 返回值为0
//升序


//多维数组 
//计算机图形的存储往往为二维数组


function turnRight(){
    turnLeft();
    turnLeft();
    turnLeft();
  }

function map(width,height){
    this.array = [];

    function backToOri(){
        while(!facingWest()){
            turnLeft();
        }
        while(frontIsClear()){
            move();
        }
        turnRight();
        while(frontIsClear()){
            move();
        }
        turnRight();
    }

    function loc(row,col){
        backToOri();
        for (let c = 0; c < row; c ++){
            move();
        }
        turnRight();
        for (let r = 0; r < col; r ++){
            move();
        }
    }
    
    function readRow(row){
        let numbers = [];
        loc(row, 0);
    
        for (let i = 0; i < width; i ++){
            let beepers = readCell();
            numbers.push(beepers);
            move();
        }
    
        return numbers;
    }
    
    function readCell(){
        let count = 0;
        while (beepersPresent()){
            count ++;
            pickBeeper();
        }
        return count;
    }
    
    this.read = function(){
        for (let row = 0; row < height; row ++){
            let numbers = readRow(row);
            this.array.push(numbers);
        }
        return this.array;
    };
}

let reader = new map(4, 4);
console.log(reader.read());



function find(numbers){
    numbers.sort(function(n1,n2){
        return n1 - n2;
    });

    for(i=0;i<numbers.length;){
        if (!numbers[i] == numbers[i+1]&&!numbers[i] == numbers[i-1]){
            numbers.spilce(i-1,1);
        }
        else if(numbers[i]==numbers[i+1]&&!numbers[i] == numbers[i-1]){
            numbers.spilce(i,1);
            i ++;
        }
        else if(numbers[i]==numbers[i-1]){
            numbers.spilce(i-1,1);
        }
        
    }
    return numbers;
}