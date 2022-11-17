function createPhoneNumber(numbers) {
    //字符串拼接
    
    //return '('+numbers[0]+numbers[1]+numbers[2]+')'+' '+numbers[3]+numbers[4]+numbers[5]+'-'+numbers[6]+numbers[7]+numbers[8]+numbers[9];
    const nums = numbers.join('');
        const a = nums.substr(0,3);
        const b = nums.substr(3,3);
        const c = nums.substr(6,4);
        console.log('('+a+')'+' '+b+'-'+c);
}
//(123) 456-7890
createPhoneNumber([1,2,3,4,5,6,7,8,9,0]);

// let name = '小米';
// // 字符串模板
// let word = hell0 ;$(name)