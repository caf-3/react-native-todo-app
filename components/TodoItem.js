import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

export default function TodoItem({item, pressHandler}){
    return(
        <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.text}</Text>
                <MaterialIcons name="delete" size={18} color='coral' />
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    item:{
        padding: 16, 
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textItem: {
        fontSize: 17
    }
})