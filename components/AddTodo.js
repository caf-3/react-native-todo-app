import React, {useState} from 'react';
import { StyleSheet, TextInput, Button, View, Text } from 'react-native';
export default function AddTodo({submitHandler}){
    const [text, setText] = useState('');
    const [showTip, setShowTip] = useState(true);
    const changeHandler = (val) =>{
        setText(val);
    }
    setTimeout(() => setShowTip(false), 14000);
    return(
        <View>
            <TextInput
            placeholder="add todo..."
            onChangeText={changeHandler}
            style={styles.input}
            />
            <Button
            title='add todo'
            color="coral"
            onPress={() => submitHandler(text)}
            />
            {showTip ? (
            <Text style={styles.text}>Tip: tap a todo to delete it.</Text>
            ): <Text>''</Text>}
        </View>
    )
}
const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingVertical: 8,
        paddingHorizontal: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        fontSize: 17
    },
    text: {
        fontSize: 17,
        color: 'coral',
        marginTop: 14
    }
});