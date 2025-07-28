
import React, { useState } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View, Text, Switch, Pressable } from 'react-native';

export default function CounterApp() {

const [number, setNumber] = useState(0);

return (
    <View style={styles.container}>
      <Text style={styles.textStyle}> Value: {number}</Text>
      <Pressable  
       onPress = {() => setNumber(number+1)}
       style={{ padding: 10, minWidth: 200, 
       alignItems: 'center', backgroundColor: 'green', marginBottom: 20, borderRadius: 5 }}>
      <Text style={{ color: 'white' }}> Increment</Text>
      </Pressable>

     <Pressable
      onPress = {() => setNumber(number-1)}
      style={{ padding: 10, minWidth: 200, 
      alignItems: 'center', backgroundColor: 'red', marginBottom: 20, borderRadius: 5 }} >
      <Text style={{ color: 'white' }}> Decrement </Text>
     </Pressable>
    
    </View>
)

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 20,
        color: 'blue',
        padding: 20
    }
})