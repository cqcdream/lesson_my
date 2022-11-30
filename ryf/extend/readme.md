- 搞清楚js 实例的生成过程
    1. js 类的构建比较独特
        - Person 构造函数
            JS 是基于对象的面向对象
            // 模板 js 没有类 Object {}
            var Person = {
                name: '...',
                age: '...'
            }// 空对象
            js 实例化过程不是血缘关系，new Person()
            有点像师徒关系 
            var aTao = {}; // Object __proto__
            aTao 基于Person     

        - 封装 用函数
            function Person() {// constructor
                this.
            }
            // 血缘关系 ？ js 却不是
            let aTao = new Person();
            // 基于对象的构建过程 new的本质
            // 基于原型式的面向对象
            function Person(name,age) {
                var o = {}; // Object 空对象 
                o.name = name;
                o.age = age;
                return o;
            }
            // 共享
            Person.prototype = {
                sayHi() {
                    console.log('hello');
                }
            }
            let aTo = Person();
    2. js 本没有类，基本上都是对象（除了简单数据类型）
        - js 函数可以封装类，完全可以实现基于对象的构建


    3. js 为了实现基于对象式的类的构建
        - 用函数作为类的声明（首字母大写），特别
            封装了 实例的构建过程
            this（new） 指向实例，函数运行 完成给实例添加基于对象一样的属性
        - 对象的方法 不要放到构造函数里声明，因为给每个实例都分配一个函数
            内存吃不消（千千万）
            js 设计了 prototype 属性
        - 实例调用 所有实例共享方法时
            let aTao = new Person(); // this 指向 调用函数的对象

    4. 在java c++  创造了面向对象的类式概念， 没有为什么，血缘关系 
        c 语言  函数式， 没有面向对象的概念
        js 更加优秀  基于对象（原型式）的类式（面向对象）概念
        1. 没有血缘关系 
            constructor Person() 
        2. 基于对象   偶像
            cai 基于 Person.prototype 
        3. 一旦基于对象， 一堆的原型在原型链上给你提供方法 
        4. 终点是null     