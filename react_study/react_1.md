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
 ```
    //ReactDOM.render()方法接受两个参数：一个虚拟DOM节点和一个真实的DOM节点，作用是将虚拟DOM挂载到真实DOM
    ReactDOM.render(
        <span>Hello World!</span>,
        document.getElementById('example')
    );
 ```
 ### React组件语法

 1. class MyTitle extends React.Component 是ES6语法，表示自定义一个MyTitle类，该类继承了基类React.Component的所有属性和方法
 2. React规定，自定义组件的第一个字母必须大写，比如MyTitle不能写成myTitle，以便与内置的原生类相区分。
 3. 每个组件都必须有render方法，定义输出样式
 4. <MyTitle/>表示生成一个组件类的实例，每个实例一定要有闭合标签，写成<MyTitle></MyTitle>也可。
 ```
    <script type="text/babel">
        class MyTitle extends React.Component {
            render(){
                return <h1>Hello World</h1>;
            }
        };
        ReactDOM.render(
            <MyTitle/>,
            document.getElementById('example')
        )
    </script>
 ```
### 组件的参数
- 组件可以从外部传入参数，内部使用this.props获取参数
```
    class MyTitle extends React.Component {
            render(){
                return <h1 style = {{color:this.props.color}}>Hello World</h1>;
            }
       };
      ReactDOM.render(
          <MyTitle color="red" />,
          document.getElementById('example')
        );
```
### 组件的状态
- 组件往往会有内部状态，使用this.state表示


