// 内存分配 放在栈内存 stack
let x = 1,
    y = 2;
let c = x; // 值得拷贝
    c = 5;
    console.log(x);
// 内存分配 对象放在堆内存  heap
let o = { name:'叶'}; // 对象 引用
let b = o; // 不是值的拷贝， 引用
b.name = '飞';
let z ;
z = x;
x = y;
y = z;
console.log(x,y,o.name);