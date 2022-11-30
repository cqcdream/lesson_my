//    1
// function isPalindrome(str) {
//     str = str.toLowerCase().replace(/\W_/g,'');
//     const reversedStr = str.split('').reverse().join('');
//     return reversedStr ;
// }
// console.log(isPalindrome('HEllo,wode'));
//    2
// 自然数中3和5倍数的数的和，同为3和5倍数的只加一次
// function solution(number){
//     let sum = 0;
//     if(number>0){
//       for(let i = number - 1;i >= 0;i--){
//         if(i%3==0||i%5==0)sum+=i;
//       }
//     }
//     return sum;
//   }
//   console.log(solution(10));//3,5,6,9,10,12,15
//    3
//编写一个接受 10 个整数（介于 0 和 9 之间）的数组的函数，该数组以电话号码的形式返回这些数字的字符串
// function createPhoneNumber(numbers){
//   const nums = numbers.join('');
//   const a = nums.substr(0,3);
//   const b = nums.substr(3,3);
//   const c = nums.substr(6,4);
//   return '('+a+')'+' '+b+'-'+c;
//     //return '('+numbers[0]+numbers[1]+numbers[2]+')'+' '+numbers[3]+numbers[4]+numbers[5]+'-'+numbers[6]+numbers[7]+numbers[8]+numbers[9];
 
// }
// console.log(createPhoneNumber(['1','2','3','4','5','6','7','8','9','0']));
//      4
// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// 给定两个数组Sandwrite一个函数（or），该函数检查两个数组是否具有“相同”的元素，
// 具有相同的多重性（成员的多重性是它出现的次数,这里的“相同”是指元素等于不平方的元素，而不管顺序如何。
// function comp(array1, array2){
//     //your code here
//     if(array1 === null || array2 === null)return false;// 判断数组是否为null
//     if(array1.length !== array2.length )return false;// 比较数组长度
//     for(let i = 0; i < array1.length; i++) {
//       for(let j = 0; j < array2.length; j++)
//         {
//           if(array1[i]*array1[i] == array2[j]){
//             array2.splice(j,1);
//             break;
//           }
//         }
//     }
//     if(array2.length === 0){
//       return true;
//     }else {
//       return false;
//     }
//   }
function comp(array1,array2) {
    if(array1 === null || array2 === null)return false;// 判断数组是否为null
    array1.sort((a, b) => a - b); array2.sort((a, b) => a - b); // 排序 升序
    return array1.map(v => v * v).join() == array2.join();// 数组变为字符串，判断两字符串是否相等
}
  console.log(comp([2,5,2],[4,25,4,16]));
  console.log(comp([2,5,2],[4,25,16]));
  console.log(comp([2,5,2],[4,25,4]));


