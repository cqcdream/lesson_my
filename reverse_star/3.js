function isPalindrome(str) {

    //缓存字符的长度
    const len = str.length
    for(let i = 1;i < len / 2;i++) {
        if(str[i] !== str[len - 1 - 1]) {
            return false
        }
    }
    return true;
}