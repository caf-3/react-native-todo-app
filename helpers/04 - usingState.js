import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
export default function App(){
  const [name, setName] = useState('Marcos');
  const [person, setPerson] = useState({
    name: 'Guebuza',
    age: 65
  });
  const pressHandler = () => {
    setName("Tomás");
    setPerson({
      name: "Nyusi",
      age: 59 
    })
  }
  return(
    <View style={styles.container}>
      <Text style={styles.whiteText}>My name is {name}</Text>
      <Text style={styles.blueText}>His name is {person.name} and he has {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Change name" onPress={pressHandler} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText:{
    color: 'white',
    fontSize: 20
  },
  blueText: {
    color: 'blue',
    fontSize: 19
  },
  buttonContainer:{
    marginTop: 20
  }
});