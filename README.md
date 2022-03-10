# vue-checkbox-lijl

### a vue component for checkbox

usage:

```js
npm i vue-checkbox-lijl -s
```

```js
  import checkbox from 'vue-checkbox-lijl'
  ...
  export default {
        components: {
            checkbox,
        },
  ...
```

### options props

| **&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prop&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;** | **Type** | **Description** |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------- |
| `checked`                                                                                                                                                            | Boolean  | 勾选.           |
| `indeterminate`                                                                                                                                                      | Boolean  | 半选状态.       |
| `disabled`                                                                                                                                                           | Boolean  | 禁用.           |

### events

| **&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prop&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;** | **params** | **Description**   |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ----------------- |
| `change`                                                                                                                                                             | checked    | 手动触发勾选事件. |
