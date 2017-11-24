## Style
- 遵循 web 上的 css 命名
- 小駝峰
- 可以傳入 style object
- 可以傳入 style array ，會根據 index 給予樣式的優先權
- StyleSheet.create
  - 提高 style 的可讀性
  - 驗證 style
  - 提高性能

```
<Text style={{ color: 'red' }}>A</Text>
<Text style={[{ color: 'red' }, { color: 'blue' }]}>A</Text>
<Text style={styles.red}>red</Text>

const styles = StyleSheet.create({
  red: {
    color: 'red',
  },
});
```
