# 鸭子模型 Duck Typing

    国王，喜欢听鸭子叫，1000只鸭子
    
    - 1000只 鸭子
    -对象字面量
    {

    }

## es6 let const
    let 声明变量
    const 声明常量 必须赋初值

    -const arr = [1,2,3];
        - 在头部和尾部
        - unshift + shift
            shift(): 用于把数组的第一个元素从其中删除，并返回第一个元素的值。
            注意： 此方法改变数组的长度
            unshift(): 在数组的开头添加一个或多个元素，然后返回新的长度。
            注意： 此方法改变数组的长度
        - push pop
            push()： 可向数组的末尾添加一个或多个元素，并返回新的长度。
            注意： 此方法改变数组的长度
            pop()： 用于删除数组的最后一个元素并返回删除的元素。
            注意： 此方法改变数组的长度
        常量能变吗？
        - 简单数据类型 常量值不能变
        - 复杂数据类型 值可以改，但是类型不能改

    - es6 之前没有常量
        var  常量的意义
        var PI
    - var let 的区别？
        let 支持块级作用域
        var 不支持
