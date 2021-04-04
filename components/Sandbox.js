import React from 'react';
import {StyleSheet, View, Text } from 'react-native';

export default function Sandbox(){
    return(
        <View style={styles.container}>
            <Text style={styles.one}>One</Text>
            <Text style={styles.two}>two</Text>
            <Text style={styles.three}>three</Text>
            <Text style={styles.four}>four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingTop: 40,
        backgroundColor: '#333'
    },
    one:{
        flex: 1,
        padding: 5,
        backgroundColor: 'orange'
    },
    two:{
        flex: 2,
        padding: 10,
        backgroundColor: 'violet'
    },
    three:{
        flex: 1,
        padding: 15,
        backgroundColor: 'coral'
    },
    four:{
        flex: 3,
        padding: 20,
        backgroundColor: 'skyblue'
    },
})