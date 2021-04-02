import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function App(){
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello word</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f34',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header:{
    backgroundColor: '#32DE84',
    padding: 10,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  }
});