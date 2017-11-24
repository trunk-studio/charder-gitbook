# One-way Data Flow
- One-way Data Flow（單向資料流）或稱之為 one-way data binding
  - **很容易做到** 單向資料流
  - UI 是你的應用程式的資料去延伸的顯示結果
  - 只有因為資料改變，才能導致 UI 的顯示結果自動跟著改變
  - UI 只能被動的隨資料而反應變化
  - data binding指的是UI元件和data model之間的互動。
  
## 沒有 data model觀念的JavaScript/jQuery寫法
  - 不斷操作HTML元件，讓畫面上顯示他要的效果
  - 每次需要data就去分析一次UI元件。
  - 作法簡單、直覺，在UI單純時可以這樣寫，但當頁面上的UI元件多、互動又複雜時，程式碼很快就會變成一團混亂。

## 有 data model觀念的JavaScript/jQuery寫法

```
<ul id='todo-list'></ul> 
<script> 
  var todos = [ 
    {text: 'Exercise.'}, 
    {text: 'Learn JavaScript.'}, 
    {text: 'Write a blog.'}, 
  ]; 

  function renderTodoList() { 
    $('#todo-list').empty(); 

    todos.map(function(el){ 
      $('#todo-list').append(new $('<li>' + el.text + '</li>')) 
    }) 
  } 

  renderTodoList(); 
</script>
```

## React 的 data binding

Sample: https://snack.expo.io/ry8pHViK-

```
import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  state = {
    str: '1 \n'
  };
  
  componentDidMount() {
    setInterval(() => {
      this.setState({
        str: this.state.str + this.state.str.length + "\n",
      })
    }, 200);
  }


  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>{this.state.str}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});

```