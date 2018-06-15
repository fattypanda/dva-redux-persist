# dva-redux-persist

redux-persist@5.* 的 dva 版

#### 软件架构
适用于 dva umi 项目

#### 安装教程

```
yarn add dva-redux-persist
```
或者
```
npm i -S dva-redux-persist
```

#### 使用说明

dva示例
```
//src/index.js
import dva from 'dva';
import { storageEnhancer } from 'dva-redux-persist';

const app = dva();
app.use({
  extraEnhancers: [
    storageEnhancer()
  ],
});
```

umi示例（或dva-cli@1.0.0.bate4版）
```
// src/dva.js
import { storageEnhancer } from 'dva-redux-persist';

export function config () {
  return {
    extraEnhancers: [
      storageEnhancer()
    ],
  };
}
```

#### API 
## storageEnhancer(opts)
```
type opts = Object
```
`opts` 参数最终传到 `redux-persist` 的 `persistReducer(opts)` .
