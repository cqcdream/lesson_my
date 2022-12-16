# JS 考试重点之手写代码

- push
    数组功能？
    哪两种数据结构的什么操作？
    [] 或 链表  队列FIFO / 栈 FILO   
    链表 [{value: 1, next:} , {value: 2, next:} ] 节点  不连续的

    数组 [1,2,3]  初始地址， arr[0] arr[1] arr[2] 连续的
        new Array[1000] 浪费空间内存
        物理地址？
        arr[i] = &arr + (i - 1)*2

- js 和其它语言不同的地方
    原型的概念 prototype
    [1,2,3]（实例）   Array(类)
    1. 声明数组 在js中有多种方法
        [1,2,3]     new Array(1,2,3)
    2. 数组对象实例添加一个公有方法
        Array.prototpye.
    3. 在对象的方法中， this 关键字指向谁？
        指向调用它的对象 
    4. arguments 代表 函数的参数对象 