import React from "react";
import {View, Text, StyleSheet, TextInput, Pressable, Alert} from "react-native";
import { useState } from "react";


const TextInputComponent: React.FC = () => {
const [text, setText] = useState("");
const [submitText, setSubmitText] = useState("");

const handleSubmit = () => {
   setSubmitText(text);
}

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{marginTop: 20,padding: 10}}>{submitText ? `Hello: ${submitText}` : ""}</Text>
            <TextInput placeholder="Type anything" style={styles.textInput} value={text} onChangeText={setText} />
            <Pressable
                onPress={handleSubmit}>
                <Text>Submit</Text>
            </Pressable>
            
        </View>
    )

}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10
    }
});




export default TextInputComponent;