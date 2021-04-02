import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
export default function App(){
  const [todos, setTodo] = useState([
    {text: 'Orar', id: 1},
    {text: 'Ler a Bíblia', id: 2},
    {text: 'Jejuar', id: 3},
  ])
  const pressHandler =  (id) =>{
    setTodo(prevTodos => {
      return prevTodos.filter(todo => todo.id != id)
    })
  } 
  const submitHandler = (text) =>{
    setTodo(prevTodos => {
      return [
        {text: text, id: parseInt((Math.random() * 1000))},
        ...prevTodos
      ]
    })
  }
  return(
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
          data={todos}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TodoItem item={item} pressHandler={pressHandler} />
          )}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
  },
  content:{
    padding: 40
  },
  list:{
    marginTop: 20
  }
});