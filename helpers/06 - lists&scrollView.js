import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
export default function App(){
  const [name, setName] = useState('Marcos');
  const [age, setAge] = useState(21);
  const [people, setPeople] = useState([
    {name: 'Bianca', key: 1},
    {name: 'Marta', key: 2},
    {name: 'Matos', key: 3},
    {name: 'Titos', key: 4},
    {name: 'Sunil', key: 5},
    {name: 'Lia', key: 6},
    {name: 'Bia', key: 7},
    {name: 'Paulo', key: 8},
    {name: 'Manuel', key: 9},
  ])
  return(
    <View style={styles.container}>
      <ScrollView>
      {people.map(person => (
        <View key={person.key}>
          <Text style={styles.person}>{person.name}</Text>
        </View>
      ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  person:{
    marginTop: 15,
    padding: 20,
    backgroundColor: 'orange',
    fontSize: 19,
    color: 'black'
  }
});