# Button 按钮

常用的操作按钮。

### 1. 基础用法

基础的按钮用法。

:::demo

```html
<template>
  <div>
    <el-row style="margin-bottom: 10px">
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>

    <el-row style="margin-bottom: 10px">
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </el-row>

    <el-row style="margin-bottom: 10px">
      <wlc-button plain>朴素按钮</wlc-button>
      <wlc-button type="primary" plain>主要按钮</wlc-button>
      <wlc-button type="success" plain>成功按钮</wlc-button>
      <wlc-button type="info" plain>信息按钮</wlc-button>
      <wlc-button type="warning" plain>警告按钮</wlc-button>
      <wlc-button type="danger" plain>危险按钮</wlc-button>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: '按钮value123',
      }
    },
    methods: {
      click() {
        alert(1)
      },
    },
  }
</script>
```

:::

# Attributes

| 参数      | 说明               | 类型   | 可选值 | 默认值 |
| --------- | ------------------ | ------ | ------ | ------ |
| svg-class | 添加自定义的 class | String | -      | -      |

# Methods

| 方法名 | 说明     | 参数 |
| ------ | -------- | ---- |
| click  | 点击事件 | -    |
