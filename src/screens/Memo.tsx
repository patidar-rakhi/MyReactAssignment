import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Child = React.memo(({ text }) => {
  console.log('rendered');
  return (
    <View style={styles.subCon}>
      <Text style={styles.text}> Word: {text}</Text>
    </View>
  );
}, (prevProps, nextProps) => {
  return prevProps.text === nextProps.text;
});

const Parent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Counter: {count}</Text>
      <Button title="Value Increment" onPress={() => setCount(prev => prev + 1)} />

      <TextInput
        style={styles.inputText}
        placeholder="you can type"
        value={text}
        onChangeText={setText}
      />

      <Child text={text} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 40,
  },
  text: {
    fontSize: 14,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
  inputText: {
    marginVertical: 10,
    paddingHorizontal: 8,
    height: 40,
    borderColor: 'grey',
    borderWidth: 3,
    
  },
  subCon: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e0e0e0',
  }
  
});

export default Parent;
