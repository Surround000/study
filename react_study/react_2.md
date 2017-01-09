### react的核心思想
View是State的输出
```
    view = f(state)
    上式中，f表示函数关系。只要state发生变化，view也要发生变化
```
```
    React的本质是将图形界面（GUI）函数化
    const person = {
    name:"michel",
    age:31
    }
    const app = ({person}) => <h1>{person.name}</h1>
    ReactDOM.render(<App person={person}/>,document,body)
```
### React没有解决的问题
- React本身只是一个DOM的抽象层，使用组件构建虚拟DOM
- 如果开发大应用，还需要解决两个问题
  - 架构：大型应用程序应该如何组织代码
  通信：组件之间如何通信
### 架构问题
  - React只是视图层的解决方案，可以用于如何一种架构
  - MVC,MVVM,Observer，Reactive...
### 通信问题
  - 组件会发生三种通信
    - 向子组件发消息
    - 向父组件发消息
    - 向其他组件发消息
    React只提供了一种通信手段:传参。对于大应用，很不方便。
### 状态的同步
    -  通信的本质是状态的同步。
    - React同步状态的基本方法:找到通信双方最近的共同父组件，通过它的state，使得子组件的状态保持同步。

### Flux价格
    最大特点：数据单向流动，与MVVM的数据双向绑定，形成鲜明对比
### Flux的核心思想
    - 不同组件的state，放在一个外部的、公共的Store上面
    - 组件订阅state的不同部分
    - 组件发送动作，引发Store的更新
###  目前最流行的两个React架构
React架构最重要的作用:管理Store与View之间的关系。
- MobX：响应式管理，state是可变对象，适合中小型项目
- Redux：函数式管理，state是不可变对象，适合大型项目
### MobX架构
MobX的核心是观察者模式
- store是被观察者
- 组件是观察者
一旦Store有变化，会立刻被组件观察到，从而引发重新渲染


