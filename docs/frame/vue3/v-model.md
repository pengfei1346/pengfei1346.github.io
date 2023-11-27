---
sidebar:
title: v-model
date: 2022-09-14
tags:
- vue3
---
# v-model

## 修饰符

**.lazy**

默认情况下，v-model 会在每次 input 事件后更新数据 (IME 拼字阶段的状态例外)。你可以添加 lazy 修饰符来改为在每次 change 事件后更新数据：

**.trim**

去除两端的空格

## 多个 v-model 绑定

```vue
<UserName
  v-model:first-name="first"
  v-model:last-name="last"
/>
```

```vue
<script setup>
defineProps({
  firstName: String,
  lastName: String
})

defineEmits(['update:firstName', 'update:lastName'])
</script>

<template>
  <input
    type="text"
    :value="firstName"
    @input="$emit('update:firstName', $event.target.value)"
  />
  <input
    type="text"
    :value="lastName"
    @input="$emit('update:lastName', $event.target.value)"
  />
</template>
```

## 自定义v-model 修饰符

```vue
<MyComponent v-model.capitalize="myText" />
```

```vue
<script setup>
const props = defineProps({
  modelValue: String,
  //组件的 v-model 上所添加的修饰符，可以通过 modelModifiers prop 在组件内访问到
  modelModifiers: { default: () => ({}) }
})

const emit = defineEmits(['update:modelValue'])

function emitValue(e) {
  let value = e.target.value
  if (props.modelModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1)
  }
  emit('update:modelValue', value)
}
</script>

<template>
  <input type="text" :value="modelValue" @input="emitValue" />
</template>
```


