const bubbleSort = arr => {
    // 函数局部变量 arr
    console.time('冒泡排序耗时');// 时间计算
    const length = arr.length; // 缓存数组长度
    // 相邻交换 一趟循环 只能搞定一个元素位置的顺序 最右侧是最大值
    for(let i = 0; i < length - 1; i++) {// 外循环
        let isSorted = true;
        for(let j = 0; j < length - i - 1; j++) { // 内循环 确定一个元素位置
            
            if(arr[j] > arr[j + 1]) {
                // const temp = arr[j];
                // arr[j] = arr[j + 1];
                // arr[j + 1] = temp;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                isSorted = false;
            }
        }
        
        if(isSorted) {
            // 一次交换都没有发生
            break;
        }
    }
    console.timeEnd('冒泡排序耗时');
}
// 全局变量arr
const arr = [3, 4, 2, 1, 5, 6, 7, 8]; // 引用式赋值 堆内存 值决定
// [5, 8, 6, 3, 9, 2, 1, 7]

bubbleSort(arr)
console.log(arr);
