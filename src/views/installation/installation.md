# 安装

### 1.配置淘宝仓库源

```
npm config set registry registry=https://registry.npm.taobao.org
```

### 2.局部配置仓库源

在本地工程创建.npmrc 文件

```
registry=https://registry.npm.taobao.org
```

### 3. npm 安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

```js

npm i wlc-ui -S -D
```

### 4. 在项目中使用

```js
import WlcUI from 'wlc-ui'
import 'wlc-ui/lib/theme/wlc-ui.css'
Vue.use(WlcUI)
```
