// this 指向外层的this  window
(() => {
    console.log(this);
})(); // (函数)()  立即执行函数