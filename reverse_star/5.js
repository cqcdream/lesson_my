// //      1
// // 编写一个函数，该函数接收一个或多个单词的字符串，并返回相同的字符串，但所有五个或更多字母的单词都颠倒了
// function spinWords(string){
//     //TODO Have fun :)
//     const reverse = function (S) {
//         let reverseStra = '';
//         for (let i = S.length - 1;i >= 0;i--) {
//             reverseStra += S[i];
//         }
//         return reverseStra;
//     }
//     let str = string.split(' ');
//     for(let j = 0; j < str.length; j++) {
//         if(str[j].length >= 5)str.splice(j,1,reverse(str[j]));
//     }
//     return str.join(' ');
//   }
//   console.log(spinWords('Seriously this is the last one'));

//      2
// //等序词是一个没有重复字母、连续或非连续字母的单词。
// // 实现一个函数，该函数确定仅包含字母的字符串是否为等值线。假设空字符串是等值线。忽略字母大小写。
// //toUpperCase () 字母小写变大写     toLowerCase ()  字母大写变小写
// // indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。

// 暴力破解 O(n^2)
function isIsogram(str){
    //... 
    if(str === '')return true;
    str = str.toLowerCase();
    let arr = str.split('');
    let num;
    // return arr;
    for(let i = 0;i < arr.length; i++) {
        for(let j = 0;j < arr.length; j++) {
            if(arr.indexOf(arr[i]) == j) {
                continue;
            }else if(arr[j] != arr[i]) {
                num = true;
            }else {
                return false;
            }
    
        }
    }
    return num;
  }
  console.log(isIsogram('Aba'));

// //A.sort() 根据Unicode码排序
// // A.sort(function(a,b) {})
// // 当返回值为负数时，那么前面的数在前面，也就是不动
// // 当返回值为正数时，那么后面的数在前
// // 为0，不动
// //O(nlogn) + O(n)
// function isIsogram(str){
//     if(str === '')return true;
//     str = str.toLowerCase();
//     let arr = str.split('');
//     arr.sort();//看排序方式  O(nlogn)
//     for(let i = 0; i < arr.length; i++) {// O(n)
//         if(arr[i] === arr[i+1])return false;
//     }
//     return true;
// }
// console.log(isIsogram('Abcda'));

// // O(n)
// function isIsogram(str) {
//     if(str === '')return false;
//     str = str.toLowerCase();
//     let arr = str.split();
//     let obj = {};//空间分配

//     for(let i = 0; i < str.length; i++) {
//         let char = arr[i];
//         if(obj[char] == 1) {
//             return false;
//         }else {
//             obj[char] = 1;
//         }
//     }
//     return true;
// }
// console.log(isIsogram('Abcda'));