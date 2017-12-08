# List

## ScrollView
可顯示超過畫面高度的物件
- 可顯示不同的物件
- 偷懶用的 List

## 使用範例

```
<ScrollView>
  <ListItem key={1} />
  <ListItem key={2} />
  <ListItem key={3} />
  <ListItem key={4} />
  <ListItem key={5} />
  <ListItem key={6} />
  <ListItem key={7} />
</ScrollView>
```


## FlatList
React Native 更高效能的 ListView，用來顯示列表、重複的物件
從 0.43 開始支援

- 跨平台
- 支持水平佈局(flexDirection: row)
- 支援 Header
- 支援 Footer
- 支援分隔線
- 支援下拉刷新
- 支援上拉加載
- 支援跳轉到指定行（ScrollToIndex）
- 如果需要分组/類/區（section），可以使用 <SectionList> 用法雷同。

## 使用範例
```
<FlatList
  data={[
    {key: 'AAAAAA'},
    {key: 'BBBBBB'},
    {key: 'CCCCCC'},
    {key: 'DDDDDD'},
    {key: 'EEEEEE'},
    {key: 'FFFFFF'},
    {key: 'GGGGGG'},
    {key: 'HHHHHH'},
    {key: 'IIIIII'},
    {key: 'JJJJJJ'},
    {key: 'KKKKKK'},
    {key: 'LLLLLL'},
  ]}
  renderItem={({item}) => <View style={{ height: 150  }}><Text>{item.key}</Text></View>}
  onEndReached={() => { Alert.alert('阿', '到底摟') }}
  ListHeaderComponent={
    <View style={[styles.container, { backgroundColor: 'blue' }]}>
      <Text style={{ color: '#fff'  }}>Header</Text>
    </View>
  }
  ListFooterComponent={
    <View style={[styles.container, { backgroundColor: 'green' }]}>
      <Text style={{ color: '#fff'  }}>Footer</Text>
    </View>
  }
  ListEmptyComponent={
    <View style={[styles.container, { backgroundColor: 'red' }]}>
      <Text style={{ color: '#fff'  }}>Empty</Text>
    </View>
  }
  ItemSeparatorComponent={
    ({highlighted}) => <View style={{ height: 3, backgroundColor: 'pink'  }} />
  }
/>
```


## 延伸閱讀
[ListView](https://facebook.github.io/react-native/releases/next/docs/listview.html) - 舊版 ListView 使用方式 已過時
