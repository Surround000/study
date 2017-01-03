### React的优点
-  组件模式:代码复用和团队分工
-  虚拟DOM：性能优势
-  移动端支持：跨终端

### JSX语法
- React使用JSX语法，JavaScript代码中可以写HTML代码
```
    let myTitle = <h1>Hello,world!</h1>
```

### JSX语法解释
(1) JSX语法的最外层，只能有一个节点
```
    //错误
    let myTitle = <p>Hello</p><p>world</p>;
```
(2) JSX语法中可以插入JavaScript代码，使用大括号
```
    let myTitle = <p>{'Hello'+'World'}</p>
```
### Babel 转码器
 JavaScript引擎（包括浏览器和Node）都不认识JSX，需要首先使用Babel转码，然后才能运行。
 ```
    <script src="react.js"></script>
    <script src="react-dom.js"></script>
    <script src="babel.min.js"></script>
    <script type="text/babel">
        //our code goes here!
    </script>
   
 ```
 -  React需要加载两个库，React和React-DOM，前者是React的核心库，后者是React的DOM适配库。
 -  Babel用来在浏览器中转换JSX语法，如果服务器已经转好了，浏览器就不需要加载这个库
 

