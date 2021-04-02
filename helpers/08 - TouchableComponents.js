import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
export default function App(){
  const [name, setName] = useState('Marcos');
  const [age, setAge] = useState(21);
  const [people, setPeople] = useState([
    {name: 'Bianca', id: 1},
    {name: 'Marta', id: 2},
    {name: 'Matos', id: 3},
    {name: 'Titos', id: 4},
    {name: 'Sunil', id: 5},
    {name: 'Lia', id: 6},
    {name: 'Bia', id: 7},
    {name: 'Paulo', id: 8},
    {name: 'Manuel', id: 9},
  ])
  const pressHandler = (id) => {
    console.log(id);
    setPeople(prevPeople => {
      return prevPeople.filter(person => person.id != id);
    })
  }
  return(
    <View style={styles.container}>
      <FlatList
      numColumns={2}
      data={people}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => pressHandler(item.id)}>
          <Text style={styles.person}>{item.name}</Text>
        </TouchableOpacity>
      )}
      />
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
    color: 'black',
    marginHorizontal: 20
  }
});