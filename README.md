# remax-dva

在 Remax 小程序中使用 dva。

## 安装

```bash
$ npm install remax-dva --save
```

或者

```bash
$ yarn add remax-dva
```

## 使用

```javascript
// app.js
import * as React from 'react';
import dva, { connect } from 'remax-dva';
import todo from './models/todo';

const app = dva();

app.model(todo);

const App = app.start(({ children }) => children);

export default App;
```

示例：https://github.com/remaxjs/todo-demo/tree/master/alipay-dva

## App 生命周期

由于 Remax 的生命周期实现依赖组件的 `ref`，如果你需要使用 `App` 上的生命周期，需要设置 `forwardRef` 属性：

```javascript
import * as React from 'react';
import dva, { connect } from 'remax-dva';

class App extends React.Component {
  onShow() {
    console.log('hello');
  }

  render() {
    return this.props.children;
  }
}

export default app.start(App, { forwardRef: true });
```

## 协议

MIT
