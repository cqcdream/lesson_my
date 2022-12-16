function generateHashtag (str) {
  if(str === null)return false; // 判断是否为空
  var str1 = str.replace(/\s/g,''); // 去掉空白符
  if(str1.length > 0 && str1.length <140 ) { 
    str = str.split(/\s+/); // 把每个单词拆开
    for(let i = 0; i < str.length; i++) {
        str[i] = str[i].slice(0,1).toUpperCase() + str[i].slice(1); // 单词首字母变大写
    }
    str = '#' + str.join('').replace(/\s/g,'');
    return str;
  }
  return false ;
}
console.log(generateHashtag("code" + " ".repeat(140) + "wars"));