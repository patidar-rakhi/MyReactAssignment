import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from 'react';



function ButtonVisibility() {

const [isVisible, setIsVisible] = useState(false);

return (
  <View style={styles.container}>
    { isVisible && (
    <Text style={styles.textInput}>"Show Context"</Text>
) }
    <Button
      title={isVisible ? "Hide Details" : "Show Details"}
      onPress={() => setIsVisible(!isVisible)} />

   </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        fontSize: 20,
        padding: 10,
        
    }
})

export default ButtonVisibility;
