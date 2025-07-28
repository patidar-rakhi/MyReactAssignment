import React from "react";
import {ScrollView,View,Text,StyleSheet,TouchableOpacity} from 'react-native';

const screens = [
  { name: 'Counter', screen: 'Counter' },
  { name: 'Memo', screen: 'Memo' },
  { name: 'SetTimer', screen: 'SetTimer' },
  { name: 'TextInput', screen: 'TextInput' },
  { name: 'ToDoList', screen: 'ToDoList' },
  { name: 'UserList', screen: 'UserList' },
  { name: 'ButtonVisibility', screen: 'ButtonVisibility' },
  { name: 'CardAndToggle', screen: 'CardAndToggle' },
  { name: 'Cards', screen: 'Cards' },
];

const DashboardApp = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {screens.map(screen => (
        <TouchableOpacity
          key={screen.name}
          onPress={() => navigation.navigate(screen.screen)}
          style={styles.tap}
        >
          <Text style={styles.text}>{screen.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default DashboardApp;


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'blue',
    flexGrow: 1,
  },
  text: {
    color: 'grey',
    fontSize: 15,
    textAlign: 'center',
  },
  tap: {
    padding: 10,
    backgroundColor: 'white',
  }
});
