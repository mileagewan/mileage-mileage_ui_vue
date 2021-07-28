# 测试

### 这个是测试

:::demo

```html
<template>
  <div>
    <el-button @click="click">{{value}}</el-button>
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

### 示例

:::demo

```html
<template>
  <div>
    <el-button @click="click">{{value}}</el-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: '按钮value2',
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

### 示例

:::demo

```html
<template>
  <div>
    <el-input v-model="value" />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: '按钮value2',
      }
    },
  }
</script>
```

:::

# Attribute

| 内容   | 说明   | 使用   |
| ------ | ------ | ------ |
| 一二三 | 一二三 | 一二三 |
