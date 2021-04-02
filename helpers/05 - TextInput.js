import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
export default function App(){
  const [name, setName] = useState('Marcos');
  const [age, setAge] = useState(21);
  return(
    <View style={styles.container}>
      <Text>enter name: </Text>
      <TextInput
      placeholder="ex: Bila"
      style={styles.input}
      onChangeText={(val) => setName(val)}
      />
      <Text>enter age: </Text>
      <TextInput
      placeholder="ex: 21"
      style={styles.input}
      onChangeText={(val) => setAge(val)}
      />
      <Text>{`nome: ${name}\nidade: ${age}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#60CE80',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: 'white',
    fontSize: 20
  },
  input:{
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    padding: 5,
    width: 200
  }
});