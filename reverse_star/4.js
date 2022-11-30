//      1
// 给定一个整数数组，找到出现奇数次的整数。始终只有一个整数出现奇数次。
//因为对于任意一个数 k，k^k = 0，k^0 = k，
//所以将array中所有元素进行异或，那么个数为偶数的元素异或后都变成了0，只留下了个数为奇数的那个元素。
// function findOdd(A) {
//     //happy coding!
//     let result = 0;
//     for(let i = 0;i < A.length;i++) {
//         result ^= A[i]; 
//     }
//     return result;
//   }
//   const A = [1, 2, 1, 2, 5, 5, 5];
//   console.log(findOdd(A));
//    2
// 七个罗马字母作数字：Ⅰ（1）、X（10）、C（100）、M（1000）、V（5）、L（50）、D（500）。记数的方法：
// 1. 相同的数字连写，所表示的数等于这些数字相加得到的数，如 Ⅲ=3；
// 2. 小的数字在大的数字的右边，所表示的数等于这些数字相加得到的数，如 Ⅷ=8、Ⅻ=12；
// 3. 小的数字（限于 Ⅰ、X 和 C）在大的数字的左边，所表示的数等于大数减小数得到的数，如 Ⅳ=4、Ⅸ=9；
// 4. 在一个数的上面画一条横线，表示这个数增值 1,000 倍，如=5000。
// 创建一个函数，该函数将正整数作为其参数，并返回包含该整数的罗马数字表示形式的字符串。

// js中的除法返回完整的商，利用Math.floor()向下取整
// 对于4，5，9都是要处理的，不同于其他数字的
// 每次循环之后原数都要减去每次处理的数
////超时了！！！
// function solution(number){
//     // convert the number to a roman numeral
//     var n,str = '';
//     var i = 1000;
//     var m = '';
//     for(; i > 0; i/10) {
//         n = Math.floor(number / i);//向下取整
//         switch(i) {
//             case 1000:
//                 {
//                     if(m > 0)str += 'M'.repeat(m);//repeat(m)复制字符串
//                     number -= n * 1000;
//                     break;
//                 }
//             case 100:
//                 {
//                     if(m === 9) {
//                         str += 'CM';
//                         m -= 9;
//                     }
//                     if(m >= 5) {
//                         str += 'D';
//                         m -= 5;
//                     }
//                     if(m === 4) {
//                         str += 'CD';
//                         m -= 4;
//                     }
//                     if(m > 0) str += 'C'.repeat(m);
//                     number -= n*100;
//                     break;
//                 }
//             case 10:
//                 {
//                     if(m === 9) {
//                         str += 'XC';
//                         m -= 9;
//                     }
//                     if(m >= 5) {
//                         str += 'L';
//                         m -= 5;
//                     }
//                     if(m === 4) {
//                         str += 'XL';
//                         m -= 4;
//                     }
//                     if(m > 0) str += 'X'.repeat(m);
//                     number -= n*10;
//                     break;
//                 }
//             case 1: 
//                 {
//                     if(m === 9) {
//                         str += 'IX';
//                         m -= 9;
//                     }
//                     if(m >= 5) {
//                         str += 'V';
//                         m -= 5;
//                     }
//                     if(m === 4) {
//                         str += 'IV';
//                         m -= 4;
//                     }
//                     if(m > 0) str += 'I'.repeat(m);
//                     number -= n;
//                     break;
//                 }     
//         }
//     }
//     return str;
//   }
//   console.log(solution(16));