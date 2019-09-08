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
import dva, { connect } from '@remax/dva';
import todo from './models/todo';

const app = dva();

app.model(todo);

const App = app.start(({ children }) => {
  return <>{children}</>;
});

export default App;
```

## 协议

MIT
