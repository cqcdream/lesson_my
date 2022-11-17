let word = "hello word how are you";
console.log(word.split(" "),word);
console.log(Math.min(...word.split(" ").map(item  => item.length)));
