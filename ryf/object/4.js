function Cat(name,color) {
    return {
        name:name,
        color:color
    }
}
// 基于对象 复用
var cat1 = new Cat('大黄','黄色');
var cat2 = new Cat('二黄','黑色');