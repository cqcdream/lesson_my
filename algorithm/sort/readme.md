 [什么是冒泡排序？](https://juejin.cn/post/6844903688415215624)

- markdown 
- 冒泡排序  Bubble Sort
    1. 排序
        很多种
    2. 交换
    3. 相邻 i < i + 1  不换 否则换
    4. 有序区域 j < length - i -1
    5. 稳定排序 算法的可靠性
    6. 有序区域的边界 最后交换的位置

    交换排序（位置，从小到大，从大到小）
- 最大值和最小值，不能传整个数组，使用es6 的展开运算符就可以  
    Math.min()
    Math.max()      ...[] 展开运算符

- 写一个高质量的冒泡排序
    1. 当在一次冒泡的内存循环中，一次交换都没有发生
        通过检测不论是否交换？ 如果没有， 待排序区域以有序，可以退出 isSorted 布尔值
    2. 基于布尔值 isSorted   优化
        如果后半段有序，还可以优化