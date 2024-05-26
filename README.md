# uni-app-wxnetwork-tool

![npm](https://img.shields.io/npm/v/uni-app-wxnetwork-tool)
![license](https://img.shields.io/npm/l/uni-app-wxnetwork-tool)
![downloads](https://img.shields.io/npm/dt/uni-app-wxnetwork-tool)

### 包介绍

`uni-app-wxnetwork-tool` 是一个专为 UniApp 开发的轻量级 HTTP 请求库，旨在解决 UniApp 中不能直接使用 Axios 的问题。该库封装了 UniApp 的 `request` API，提供了简单易用的 GET、POST、PUT、DELETE 请求方法，并支持全局请求和响应拦截器，便于处理全局加载动画、请求头设置和统一的错误处理。

### 安装

```bash
npm install uni-app-wxnetwork-tool
```

### 使用方法

#### GET 请求

获取数据时使用：

```javascript
async function fetchData() {
  try {
    const response = await $http.get('/api/example', { param1: 'value1' });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

#### POST 请求

提交数据时使用：

```javascript
async function postData() {
  try {
    const response = await $http.post('/api/example', { key1: 'value1', key2: 'value2' });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

#### PUT 请求

更新数据时使用：

```javascript
async function updateData() {
  try {
    const response = await $http.put('/api/example/1', { key1: 'newValue' });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

#### DELETE 请求

删除数据时使用：

```javascript
async function deleteData() {
  try {
    const response = await $http.delete('/api/example/1');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

通过这些简单的示例，你可以快速了解如何在 UniApp 中使用 `uni-app-wxnetwork-tool` 进行常见的 HTTP 请求操作。

初始化请求实例
在你的项目中创建一个 main.js 文件，并初始化请求实例：

```javascript
import { $http } from '@escook/request-miniprogram'

uni.$http = $http
```
# 包的使用例子
在 page.vue中进行使用
```vue
<template>
  <view>
    Cate
  </view>
</template>

<script>
  import { $http } from '../../utils/network_tool';

  export default {
    data() {
      return {};
    },
    onLoad() {
      this.ceshi();
    },
    methods: {
      async ceshi() {
        const res = await $http.get('/api/flootList');
        console.log(res);
      }
    }
  };
</script>

<style lang="scss">

</style>
```