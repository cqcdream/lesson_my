# css 必考题BFC 
    Block Formating Context
        Block 占一行
    Flex Formating Context
        row 不会换行
    我们看到的页面 哪些规则决定？
    - 文档流
        正常文档流 从左到右，从上到下
        脱离文档流 
            display: none
            position 不为static
            float 浮动 离开文档流
            父元素拿不到子元素的高度
            <!-- 父元素定死高度  -->
            弹性布局 子元素在一行上显示， float 在一行

- 在正常文档流中
    float 会让元素， 离开文档流
    父元素， 不能知晓子元素大小
    更重要的问题是？ 文档流出问题， 下面的盒子会盖到float 元素
    一定要父元素拿到高度， 
    在正常文档流中，可以开启新的BFC 
    html 是最大的BFC 由浏览器自动创建给予 
    - 在BFC 环境中， 父元素高度会将浮动元素参与计算 
    - 创建BFC 的方法
        - overflow: hidden
        - display: inline-block
        - position: absolute fixed
        - 浮动
        - display: table

    - 在同一个BFC 里， 垂直方向的距离， 由margin 决定
        相邻margin 会重叠